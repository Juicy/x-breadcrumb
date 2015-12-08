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
    <script src="bower_components/webcomponentsjs/webcomponents.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/x-breadcrumb/x-breadcrumb.html">
    <link rel="import" href="bower_components/x-breadcrumb/x-crumb.html">
    ```

3. Start using it!

    ```html
    <x-breadcrumb>
      <x-crumb value="Food" dropdown="true" listid="zeroLevelOptions">
        <ul>
          <li onclick="console.log('Food selected')">Food</li>
          <li onclick="console.log('Clothing selected')">Clothing</li>
          <li onclick="console.log('Housing selected')">Housing</li>
        </ul>
      </x-crumb>
      <x-crumb value="Flyte" dropdown="true" listid="firstLevelOptions">
         <ul>
          <li onclick="console.log('Food selected')">Food</li>
          <li onclick="console.log('Clothing selected')">Clothing</li>
          <li onclick="console.log('Housing selected')">Housing</li>
        </ul>
      </x-crumb>
      <x-crumb value="Beverage" dropdown="true" listid="secondLevelOptions">
       <ul>
          <li onclick="console.log('Food selected')">Food</li>
          <li onclick="console.log('Clothing selected')">Clothing</li>
          <li onclick="console.log('Housing selected')">Housing</li>
        </ul></x-crumb>
      <x-crumb value="Coke" dropdown="true" listid="thirdLevelOptions" add="true">
       <ul>
          <li onclick="console.log('Food selected')">Food</li>
          <li onclick="console.log('Clothing selected')">Clothing</li>
          <li onclick="console.log('Housing selected')">Housing</li>
        </ul></x-crumb>
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