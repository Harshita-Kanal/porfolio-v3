---
title: "JavaScript Module Bundlers and All That Jazz"
publishedAt: "2024-02-09"
summary: "Understand what bundlers are, their history from Browserify to Webpack and Parcel, and why we need them."
---

## So, what is a bundler?

A bundler is a tool that brings all your code organized into multiple files, together (bundled up!), ready to be loaded into the browser. While doing so, it generates a dependency graph of all your source code, and third-party libraries and ensures that the dependencies could be easily updated and the code is error-free. Along with this, some bundlers also come with features that help you in optimizing the performance of your app, helping you implement things like **tree-shaking**, **lazy loading**, **code splitting**, **hot module replacement**, etc.

## How was the world like before bundlers?

Before bundlers - for a large part of the old web, people would link the JavaScript files served through a CDN directly. Let's consider jQuery as an example -

```html
<script src="//code.jquery.com/jquery-2.13.0.min.js"></script>
<script>
  // `$` global variable available here
</script>
```

This began to change when NPM came in and running npm install became a quick and easy way to install dependencies. **Browserify** became the first JavaScript bundler. As its documentation says -

> "Browsers don't have the require method defined, but Node.js does. With Browserify you can write code that uses require in the same way that you would use it in Node."

Also, the `require()` node method was synchronous, if we need a file that hasn't been loaded, we need to do an HTTP request, but that's asynchronous. The solution is to put all dependencies together and have the code ready in memory so that it could be used whenever needed with the `require()` method. Also, say you only use a single function from lodash, you have to add the entire library and then squish it together. How do you tree shake the dependencies on your code? Lazy loading chunks of code can be hard to do at scale and requires a lot of manual work from the developer. JavaScript bundler would help implement exactly that.

Browserify was great at bundling scripts, but what if we need to transform code - Say compile CoffeeScript to JavaScript, for this, a new group of tools for the web was born, which focussed on running code transforms. These are usually called task runners, and the most popular ones are **Grunt** and **Gulp**.

And then came **Webpack**, which attempted to give the best of both worlds and much more. It also supported bundling and transforming non-JavaScript assets, like HTML, CSS, and images. Many popular tools today like create-react-app use Webpack.

## Some popular bundlers today

### Webpack

**Webpack** is a static module bundler for modern JavaScript applications. On processing your application - Webpack internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets from which content is served.

Some of its features include -

- **Hot module replacement** - exchanges, adds, or removes modules while an application is running, without a full reload. Thus, saving you time 😁
- **Code Splitting** - allows you to split your code into various bundles which can then be loaded on demand or in parallel. It can be used to achieve smaller bundles and control resource load prioritization which, if used correctly, can have a major impact on load time.
- **Tree-shaking** - A term commonly used in JavaScript for dead code elimination, The webpack 2 release came with built-in support for ES2015 modules as well as unused module export detection.

### Parcel

**Parcel** is a popular zero configuration build tool for the web. Some of its popular features include -

- **Native performance** - Parcel's JavaScript compiler, CSS transformer, and source maps implementation are written in Rust for maximum performance. It builds the code in parallel using worker threads, utilizing all of the cores on the machine. Everything is cached - ensuring that the same code isn't built multiple times.
- **Lazy dev builds** - In development, Parcel can defer building files until they are requested in the browser.

Other popular build tools include **Vite.js**, **Browserify**, **Rollup** - The bundler behind vite.

## TL;DR

In this article, we learned about bundlers, their background, the world before them and got introduced to some popular bundlers. So, dive deep in and explore what works for your projects the best ✨
