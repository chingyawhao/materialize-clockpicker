## Description:
This is a materialize clockpicker designed as an addition to http://materializecss.com/

Most source codes are taken from https://github.com/weareoutman/clockpicker

## Install:

### bower
`bower install materialize-clockpicker --save`

### npm
`npm i materialize-clockpicker --save`

## Options:
Here are some options and their defaults:
```
default: '',           // default time, 'now' or '13:14' e.g.
fromnow: 0,            // set default time to * milliseconds from now
donetext: 'Done',      // done button text
autoclose: false,      // auto close when minute is selected
ampmclickable: false,  // set am/pm button on itself
darktheme: false,      // set to dark theme
twelvehour: true,      // change to 12 hour AM/PM clock from 24 hour
vibrate: true,         // vibrate the device when dragging clock hand
container: ''          // default will append clock next to input
```

## Screenshots:
![Image of Materialize Clock Light](https://github.com/chingyawhao/materialize-clockpicker/blob/master/images/material-clock-light.PNG)
![Image of Materialize Clock Dark](https://github.com/chingyawhao/materialize-clockpicker/blob/master/images/material-clock-dark.PNG)


## Developing:
```
npm i gulp bower -g
npm install
bower install
gulp watch
```


## Getting started

### Basic setup

1. Make sure you have materialize css (including their JavaScript files): http://materializecss.com/

2. Install this package via npm or bower. Alternatively you can also download the [source](https://github.com/chingyawhao/materialize-clockpicker/tree/master/src) files and add them to your project manually.

3. Create an input field in your html code like the following:

  ```
  <div class="input-field col s12">
      <label for="timepicker">Time</label>
      <input id="timepicker" class="timepicker" type="time">
  </div>
  ```

4. Add the Javascript trigger with the corresponding [options](https://github.com/chingyawhao/materialize-clockpicker#options)

  ```
  <script>
    $('#timepicker').pickatime({
      autoclose: false,
      twelvehour: false
    });
  </script>
  ```

You can trigger the clock either by ID's or classes (useful if you have several clocks on one page).
