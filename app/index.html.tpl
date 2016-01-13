<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <title>{%=o.htmlWebpackPlugin.options.title || 'Webpack App'%}</title>

  {% if (o.htmlWebpackPlugin.files.favicon) { %}
  <link rel="shortcut icon" href="{%=o.htmlWebpackPlugin.files.favicon%}">
  {% } %}
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  {% for (var css in o.htmlWebpackPlugin.files.css) { %}
  <link href="{%=o.htmlWebpackPlugin.files.css[css] %}" rel="stylesheet">
  {% } %}
</head>
<body>
{% if (o.htmlWebpackPlugin.options.unsupportedBrowser) { %}
<style>.unsupported-browser { display: none; }</style>
<div class="unsupported-browser">
  Sorry, your browser is not supported.  Please upgrade to
  the latest version or switch your browser to use this site.
  See <a href="http://outdatedbrowser.com/">outdatedbrowser.com</a>
  for options.
</div>
{% } %}

{% if (o.htmlWebpackPlugin.options.appMountId) { %}
<div id="{%=o.htmlWebpackPlugin.options.appMountId%}"></div>
{% } %}

{% if (o.htmlWebpackPlugin.options.appMountIds && o.htmlWebpackPlugin.options.appMountIds.length > 0) { %}
{% for (var index in o.htmlWebpackPlugin.options.appMountIds) { %}
<div id="{%=o.htmlWebpackPlugin.options.appMountIds[index]%}"></div>
{% } %}
{% } %}

{% if (o.htmlWebpackPlugin.options.window) { %}
<script>
  {% for (var varName in o.htmlWebpackPlugin.options.window) { %}
    window['{%=varName%}'] = {%#JSON.stringify(o.htmlWebpackPlugin.options.window[varName])%};
  {% } %}
</script>
{% } %}

{% for (var ref in o.htmlWebpackPlugin.options.cdnRefs) { %}
<script src="{%=o.htmlWebpackPlugin.options.cdnRefs[ref] %}"></script>
{% } %}

{% for (var chunk in o.htmlWebpackPlugin.files.chunks) { %}
<script src="{%=o.htmlWebpackPlugin.files.chunks[chunk].entry %}"></script>
{% } %}

{% if (o.htmlWebpackPlugin.options.devServer) { %}
<script src="{%=o.htmlWebpackPlugin.options.devServer%}/webpack-dev-server.js"></script>
{% } %}

{% if (o.htmlWebpackPlugin.options.googleAnalytics) { %}
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');


  {% if (o.htmlWebpackPlugin.options.googleAnalytics.trackingId) { %}
    ga('create', '{%=o.htmlWebpackPlugin.options.googleAnalytics.trackingId%}', 'auto');
    {% } else { throw new Error("html-webpack-template requires googleAnalytics.trackingId config"); }%}

  {% if (o.htmlWebpackPlugin.options.googleAnalytics.pageViewOnLoad) { %}
    ga('send', 'pageview');
    {% } %}
</script>
{% } %}
</body>
</html>
