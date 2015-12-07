# x-breadcrumb
Custom Element for category breadcrumbs in Product Information Manager

# &lt;x-breadcrumb&gt;

> Polymer Custom Element for category breadcrumbs in Product Information Manager
## Demo: ...
```
Entire page is a content of the &lt;x-breadcrumb&gt;, check the source!

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install x-breadcrumb --save
```

Or [download as ZIP](https://github.com/Juicy/x-breadcrumb/archive/polymer_1.0.zip).

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src=&quot;bower_components/webcomponentsjs/webcomponents.js&quot;></script>
    ```

2. Import Custom Element:

    ```html
    <link rel=&quot;import&quot; href=&quot;bower_components/x-breadcrumb/x-breadcrumb.html&quot;>
    <link rel=&quot;import&quot; href=&quot;bower_components/x-breadcrumb/x-crumb.html&quot;>
    ```

3. Start using it!

    ```html
    <x-breadcrumb>
      <x-crumb value="Food" dropdown="true" alloptions=["Food","Clothing","Housing"] dataListId="firstLevelOptions"></x-crumb>
      <x-crumb value="Beverage" dropdown="true" alloptions=["Food","Clothing","Housing"] dataListId="secondLevelOptions"></x-crumb>
      <x-crumb value="Coke" dropdown="true" alloptions=["Food","Food1","Food2","Food3","Food4","Clothing","Housing"] dataListId="thirdLevelOptions" add="true"></x-crumb>
    </x-breadcrumb>
    ```

## Options

Attribute       | Options             | Default | Description
---             | ---                 | ---     | ---
`allelements`   | *JSON*              | []      | JSON array of string values of drop down options.
`dropdown`      | *boolean*           | `true`  | Should a searchable options list come up for this crumb


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/Juicy/x-breadcrumb/releases).