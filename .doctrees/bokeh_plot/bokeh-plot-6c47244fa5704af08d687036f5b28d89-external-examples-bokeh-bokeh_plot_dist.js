(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("93b505b8-d892-48a2-97a8-79617d83d035");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '93b505b8-d892-48a2-97a8-79617d83d035' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;02e7c7df-e174-4b2f-b85f-70704fa7756e&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65373&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65360&quot;}},&quot;id&quot;:&quot;65356&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65429&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65378&quot;}},&quot;id&quot;:&quot;65377&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65415&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65416&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65417&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65419&quot;}},&quot;id&quot;:&quot;65418&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65385&quot;},{&quot;id&quot;:&quot;65386&quot;},{&quot;id&quot;:&quot;65387&quot;},{&quot;id&quot;:&quot;65388&quot;},{&quot;id&quot;:&quot;65389&quot;},{&quot;id&quot;:&quot;65390&quot;}]},&quot;id&quot;:&quot;65392&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65371&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65400&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65355&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65406&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65347&quot;}},&quot;id&quot;:&quot;65346&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65375&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65369&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65350&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65353&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65385&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65378&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65415&quot;}},&quot;id&quot;:&quot;65419&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65340&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;65337&quot;},{&quot;id&quot;:&quot;65368&quot;}]},&quot;id&quot;:&quot;65420&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;65402&quot;}]},&quot;id&quot;:&quot;65414&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65382&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65401&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;or1t6WWMCsB1zZXisUgKwEjdvdv9BArAG+3l1EnBCcDu/A3OlX0JwMIMNsfhOQnAlRxewC32CMBoLIa5ebIIwDs8rrLFbgjADkzWqxErCMDhW/6kXecHwLRrJp6powfAiHtOl/VfB8Bbi3aQQRwHwC6bnomN2AbAAavGgtmUBsDUuu57JVEGwKfKFnVxDQbAeto+br3JBcBO6mZnCYYFwCD6jmBVQgXA9Am3WaH+BMDHGd9S7boEwJopB0w5dwTAbTkvRYUzBMBASVc+0e8DwBNZfzcdrAPA5minMGloA8C6eM8ptSQDwIyI9yIB4QLAYJgfHE2dAsAzqEcVmVkCwAa4bw7lFQLA2ceXBzHSAcCs178AfY4BwIDn5/nISgHAUvcP8xQHAcAmBzjsYMMAwPkWYOWsfwDAzCaI3vg7AMA+bWCvifD/v+SMsKEhaf+/iqwAlLnh/r8xzFCGUVr+v9froHjp0v2/fQvxaoFL/b8kK0FdGcT8v8pKkU+xPPy/cGrhQUm1+78WijE04S37v7ypgSZ5pvq/Y8nRGBEf+r8J6SELqZf5v68Icv1AEPm/VijC79iI+L/8RxLicAH4v6JnYtQIeve/SIeyxqDy9r/upgK5OGv2v5XGUqvQ4/W/O+ainWhc9b/iBfOPANX0v4glQ4KYTfS/LkWTdDDG87/UZONmyD7zv3qEM1lgt/K/IKSDS/gv8r/Gw9M9kKjxv2zjIzAoIfG/FAN0IsCZ8L+6IsQUWBLwv8CEKA7gFe+/DMTI8g8H7r9YA2nXP/jsv6RCCbxv6eu/8IGpoJ/a6r9AwUmFz8vpv4wA6mn/vOi/2D+KTi+u578kfyozX5/mv3C+yhePkOW/vP1q/L6B5L8IPQvh7nLjv1R8q8UeZOK/oLtLqk5V4b/w+uuOfkbgv3h0GOdcb96/EPNYsLxR3L+ocZl5HDTav0Dw2UJ8Fti/2G4aDNz41b9w7VrVO9vTvxBsm56bvdG/UNW3z/Y/z7+A0jhitgTLv7DPufR1yca/4Mw6hzWOwr8glHcz6qW8v4COeVhpL7S/wBH3+tBxp78AGuwTPROKvwAJAuJk0JQ/wA/9JjRVqz+AjXzuGiG2PyCTesmbl74/YEw8Ug6Hwz8wT7u/TsLHPwBSOi2P/cs/YKpczWcc0D/IKxwECDrSPzCt2zqoV9Q/mC6bcUh11j8AsFqo6JLYP2gxGt+IsNo/0LLZFSnO3D84NJlMyeveP9BarMG0hOA/gBsM3YST4T803Gv4VKLiP+icyxMlseM/nF0rL/W/5D9QHotKxc7lPwDf6mWV3eY/uJ9KgWXs5z9oYKqcNfvoPyAhCrgFCuo/0OFp09UY6z+IosnupSfsPzhjKQp2Nu0/6COJJUZF7j+g5OhAFlTvP6hSJC5zMfA/BDPUO9u48D9cE4RJQ0DxP7jzM1erx/E/ENTjZBNP8j9stJNye9byP8SUQ4DjXfM/HHXzjUvl8z94VaObs2z0P9A1U6kb9PQ/LBYDt4N79T+E9rLE6wL2P+DWYtJTivY/OLcS4LsR9z+Ql8LtI5n3P+x3cvuLIPg/RFgiCfSn+D+gONIWXC/5P/gYgiTEtvk/VPkxMiw++j+s2eE/lMX6PwS6kU38TPs/YJpBW2TU+z+4evFozFv8PxRboXY04/w/bDtRhJxq/T/IGwGSBPL9PyD8sJ9sef4/fNxgrdQA/z/UvBC7PIj/P5ZOYGTSBwBAxD44a4ZLAEDwLhByOo8AQB4f6Hju0gBASg/Af6IWAUB4/5eGVloBQKTvb40KngFA0t9HlL7hAUD+zx+bciUCQCrA96EmaQJAWLDPqNqsAkCEoKevjvACQLKQf7ZCNANA3oBXvfZ3A0AMcS/EqrsDQDhhB8te/wNAZFHf0RJDBECSQbfYxoYEQL4xj996ygRA7CFn5i4OBUAYEj/t4lEFQEYCF/SWlQVAcvLu+krZBUCe4sYB/xwGQMzSngizYAZA+MJ2D2ekBkAms04WG+gGQFKjJh3PKwdAgJP+I4NvB0Csg9YqN7MHQNpzrjHr9gdABmSGOJ86CEAyVF4/U34IQGBENkYHwghAjDQOTbsFCUC6JOZTb0kJQOYUvlojjQlAFAWWYdfQCUBA9W1oixQKQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65437&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65436&quot;}},&quot;id&quot;:&quot;65415&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65408&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65351&quot;}},&quot;id&quot;:&quot;65350&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65416&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65399&quot;}},&quot;id&quot;:&quot;65403&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65358&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65399&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65400&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65401&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65403&quot;}},&quot;id&quot;:&quot;65402&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65344&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65417&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65386&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65360&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65390&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65357&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65354&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65391&quot;}},&quot;id&quot;:&quot;65387&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65351&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65388&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65354&quot;},{&quot;id&quot;:&quot;65355&quot;},{&quot;id&quot;:&quot;65356&quot;},{&quot;id&quot;:&quot;65357&quot;},{&quot;id&quot;:&quot;65358&quot;},{&quot;id&quot;:&quot;65359&quot;}]},&quot;id&quot;:&quot;65361&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65389&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65391&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65377&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65380&quot;},{&quot;id&quot;:&quot;65384&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65381&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65418&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65424&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65392&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65369&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65373&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65371&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65375&quot;}},&quot;id&quot;:&quot;65368&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;exSuR+F6lD/TTWIQWDm0P+Olm8QgsMI/Vg4tsp3vxz9eukkMAivHP8/3U+Olm8Q/KVyPwvUovD9YObTIdr6vP7gehetRuJ4/eekmMQisjD956SYxCKx8P/p+arx0k2g/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[12]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65411&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65410&quot;}},&quot;id&quot;:&quot;65399&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65424&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65436&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65410&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65437&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65406&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65411&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65408&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65429&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65381&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65384&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65431&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65382&quot;}},&quot;id&quot;:&quot;65381&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65377&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65380&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65346&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65349&quot;},{&quot;id&quot;:&quot;65353&quot;},{&quot;id&quot;:&quot;65413&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65350&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65402&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65405&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65361&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65338&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65342&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65340&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65344&quot;}},&quot;id&quot;:&quot;65337&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65347&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;65414&quot;}]},&quot;id&quot;:&quot;65413&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65346&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65349&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65342&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65431&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65405&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65338&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65359&quot;,&quot;type&quot;:&quot;HelpTool&quot;}],&quot;root_ids&quot;:[&quot;65420&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"02e7c7df-e174-4b2f-b85f-70704fa7756e","root_ids":["65420"],"roots":{"65420":"93b505b8-d892-48a2-97a8-79617d83d035"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();