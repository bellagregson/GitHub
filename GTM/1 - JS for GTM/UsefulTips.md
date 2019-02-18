# Javascript for Google Tag Manager

## Useful tricks and methods

### First and 3rd party cookies

First-party cookies are created by the host domain – the domain the user is visiting. These types of cookies are generally considered good; they help provide a better user experience and keep the session open. This basically means the browser is able to remember key pieces of information, such as which items you add to shopping carts, your username and passwords, and language preferences.

First-party cookies are stored by the domain (website) you are visiting directly. They allow website owners to collect analytics data, remember language settings, and perform other useful functions that help provide a good user experience.

Third-party cookies are created by domains other than the one you are visiting directly, hence the name third-party. They are used for cross-site tracking, retargeting and ad-serving.

In addition to a first-party cookie being created by the host site, somenewssite.com, a third-party cookie is also created by ad.doubleclick.net. The reason for a third-party cookie is because the URL (ad.doubleclick.net) doesn’t match the domain (somenewssite.com). The cookie is left by a third-party advertising provider, hence the name third-party cookie.

### How Are Third-Party Cookies Created on a Website?

Now you might be thinking, how can ad.doubleclick.net or any other third party create a cookie if the user is on a different website at a given moment?

In order for a third-party cookie to be created, a request needs to be sent from the web page to the third party’s server. The file being requested is different depending on the use, but it can be an actual creative (an ad) or a tracking pixel, which is completely invisible to the user but acts as a tracking cookie in situations when there is no click event (for instance, when just a web page is opened) and click redirects cannot be used.

For example, if the third party was an advertising service like DoubleClick by Google, the request would be for a creative – the actual ad the visitor sees. A DoubleClick markup can allow a third-party cookie to be placed. Here’s what the unique ad markup could look like:
```
<a href="ad.doubleclick.net/some-other-parameters-specific-to-this-ad" target="_blank"><img src="ad.doubleclick.net/the-extension-to-the-creative"></a>
```
When the web page loads, the above ad markup would also load and a request would be sent off to ad.doubleclick.net/the-extension-to-the-creative to retrieve the image and assign a cookie to the user at the same time.

Different third parties may request different files from their web servers and send them back to the browser.


## hitCallback and eventCallback

### hitCallback

hitCallback is a feature of the analytics.js collection library. It lets you provide a callback function for each tag separately. If you want to, for example, fire some tag directly after your pageview has fired, you might want to use hitCallback to push an event into dataLayer, and then use that event to fire your second tag. Or you might do something really wacky, such as use hitCallback to fire a single tag multiple times.

The key thing here is to make sure that the Custom JavaScript Macro which holds the callback function returns a function which does all the work. This is important, since otherwise the function expression in your callback macro would fire TWICE: first when the tag is written and executed, and again when the callback is fired.



### eventCallback

eventCallback is pure GTM. If you push a dataLayer event into the message queue, you can also push the eventCallback key as well. The value of the key would be the callback function. As soon as all tags which fire on the event that you pushed have executed, your callback function will fire.
```
dataLayer.push({
    'key1' : 'value1',
    'key2' : 'value2',
    'event' : 'fireTags',
    'eventCallback' : function() {
        alert('ALL tags which fire on {{event}} equals fireTags have now fired');
    }
});
```
So in the code example above, as soon as all tags that have the firing rule {{event}} equals fireTags have executed, the function in the callback will fire.


## Create  a 'set cookie' utility function

Cookies are a great, if somewhat outdated, way of storing information in the browser. Since Google Tag Manager operates in the context of a web page, it is essentially stateless. Thus any information you want to persist from one page to another must be stored either in the server or the browser itself. The latter is far easier to do, and with browser cookies it’s just a question of adding a couple of lines of code to your GTM deployment.

First, you need a Custom JavaScript Variable. You can name it {{Set Cookie}}, for example.
```
function() {
  return function(name, value, ms, path, domain) {
    if (!name || !value) {
      return;
    }
    var d;
    var cpath = path ? '; path=' + path : '';
    var cdomain = domain ? '; domain=' + domain : '';
    var expires = '';
    if (ms) {
      d = new Date();
      d.setTime(d.getTime() + ms);
      expires = '; expires=' + d.toUTCString();
    }
    document.cookie = name + "=" + value + expires + cpath + cdomain;
  }
}
```
This Custom JavaScript Variable returns a function that takes five parameters:
* name (required): the name of the cookie (string)
* value (required): the value of the cookie (string)
* ms: expiration time of the cookie in milliseconds. If unset, defaults to a Session cookie (expires when the browser is closed).
* path: the path of the cookie. If unset, defaults to the current page path.
* domain: the domain of the cookie. If unset, defaults to the current domain.

To use the cookie, you invoke it with:
```
{{Set Cookie}}('test', 'true', 10000, '/', 'simoahava.com');
```
The code above, when run in GTM, sets a cookie with name "test", value "true", expiration time of ten seconds, and it’s set on the root of the simoahava.com domain.

With this helper, setting cookies is a breeze. Remember that you can then use the handy 1st Party Cookie variable in GTM to retrieve values from set cookies.



## Transvering up the DOM via parent elements

Sometimes it’s necessary to climb up (or down) the Document Object Model. For example, if you’re using a Click / All Elements trigger, it always targets the actual element that was clicked. But that’s not always necessarily the element you want to track! Say you have an HTML structure like this:
```
<a href="takemeaway.html">
  <button id="clickMe">
    <span>Click Me!</span>
  </button>
</a>
```
Now, if you use a Click / All Elements trigger, the element that is captured in the click is the <span/>. But I’m guessing you actually want to use the <a href="takemeaway.html"> element, since you’re more interested in knowing what happens after the click. So, you can use this Custom JavaScript Variable to return the nearest link above the clicked element in the DOM tree:
```
function() {
  var el = {{Click Element}};
  while (!el.matches('a') && !el.matches('body')) {
    el = el.parentElement;
  }
  return el.matches('a') ? el : undefined;
}
```
NOTE! This relies on the matches() method, so don’t forget to implement the polyfill from above, first!

This Custom JavaScript Variable climbs up the DOM until it reaches the first link element it finds ('a'), after which it returns this element. If it doesn’t find a link, it returns undefined instead.



## Best practices

Always wrap custom html scripts in a self executing function in order to protect the global namespace

Always prefix global variables with 'window'
you can create utility functions

convert an array of objects into an array of strings for Facebook


