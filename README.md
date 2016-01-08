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
    <x-breadcrumb orientation='vertical'>
      <x-crumb value="Food" dropdown="true" listid="zeroLevelOptions">
        <li onclick="console.log('Food selected')"><a href="#"  data-id="item">Food 1</a></li>
        <li onclick="console.log('Clothing selected')"><a href="#" data-id="item">Clothing 1</a></li>
        <li onclick="console.log('Housing selected')"><a href="#" data-id="item">Housing 1</a></li>
      </x-crumb>
      <x-crumb value="Beverage" dropdown="true" listid="secondLevelOptions">
        <li onclick="console.log('Automobiles selected')"><a href="#" data-id="item">Automobiles</a></li>
        <li onclick="console.log('Laundry selected')"><a href="#" data-id="item">Laundry</a></li>
        <li onclick="console.log('Cleaning selected')"><a href="#" data-id="item">Cleaning</a></li>
      </x-crumb>
      <x-crumb value="Coke" dropdown="true" listid="thirdLevelOptions">
        <li onclick="console.log('Water selected')"><a href="#" data-id="item">Water</a></li>
        <li onclick="console.log('Eatables selected')"><a href="#" data-id="item">Eatables</a></li>
        <li onclick="console.log('grocery selected')"><a href="#" data-id="item">grocery</a></li>
      </x-crumb>
      <x-crumb value="Add" dropdown="true" listid="addLevelOptions">

      </x-crumb>
    </x-breadcrumb>
    ```

## Options

## x-breadcrumb
Attribute       | Options             | Default           | Description
---             | ---                 | ---               | ---
`orientation`   | *String*            | 'horizontal'      | orientation of the breadcrumbs to appeartoptions.


## x-crumb
Attribute       | Options             | Default           | Description
---             | ---                 | ---               | ---
`value`         | *String*                  | 'horizontal'      | label of the option.
`dropdown`      | *boolean*           | `true`            | Should a searchable options list come up for this crumb
`listid`        | *String*            | ``                | list id to be used
`search-query`  | *String*            | ``                | Search query is used to filter the displayed list options
`ghost`         | *boolean*           | `false`            | displayed as a ghost crumb
`active`        | *boolean*           | `false`            | displayed as a active crumb , else normal crumb


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/Juicy/x-breadcrumb/releases).