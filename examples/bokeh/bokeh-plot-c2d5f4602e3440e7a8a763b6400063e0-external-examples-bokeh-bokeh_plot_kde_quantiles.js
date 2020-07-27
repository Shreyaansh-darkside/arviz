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
    
      
      
    
      var element = document.getElementById("1709f475-57ea-44b6-8381-0dbb823752bc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1709f475-57ea-44b6-8381-0dbb823752bc' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;0bd72efa-5eb5-4fa4-aab6-b83e48606a42&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67776&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;kCHi3zThqj/2JmIFgxmtP10s4irRUa8/4hgxqA/FsD+VG/G6NuGxP0gesc1d/bI/+yBx4IQZtD+uIzHzqzW1P2Im8QXTUbY/FCmxGPpttz/IK3ErIYq4P3suMT5Iprk/LjHxUG/Cuj/iM7Fjlt67P5Q2cXa9+rw/SDkxieQWvj/7O/GbCzO/P1efWFeZJ8A/sKC44Ky1wD8KohhqwEPBP2SjePPT0cE/vqTYfOdfwj8XpjgG++3CP3CnmI8OfMM/yqj4GCIKxD8kqliiNZjEP36ruCtJJsU/16wYtVy0xT8wrng+cELGP4qv2MeD0MY/5LA4UZdexz89spjaquzHP5ez+GO+esg/8bRY7dEIyT9Ktrh25ZbJP6S3GAD5JMo//bh4iQyzyj9XutgSIEHLP7G7OJwzz8s/Cr2YJUddzD9kvviuWuvMP72/WDhuec0/F8G4wYEHzj9xwhhLlZXOP8rDeNSoI88/JMXYXbyxzz8+Y5zz5x/QP+xjTLjxZtA/mGT8fPut0D9FZaxBBfXQP/JlXAYPPNE/nmYMyxiD0T9MZ7yPIsrRP/hnbFQsEdI/pWgcGTZY0j9SaczdP5/SP/5pfKJJ5tI/rGosZ1Mt0z9Ya9wrXXTTP1hr3CtddNM/WGvcK1100z+saixnUy3TP/5pfKJJ5tI/UmnM3T+f0j+laBwZNljSP/hnbFQsEdI/TGe8jyLK0T+eZgzLGIPRP/JlXAYPPNE/RWWsQQX10D+YZPx8+63QP+xjTLjxZtA/PmOc8+cf0D8kxdhdvLHPP8rDeNSoI88/ccIYS5WVzj8XwbjBgQfOP72/WDhuec0/ZL74rlrrzD8KvZglR13MP7G7OJwzz8s/V7rYEiBByz/9uHiJDLPKP6S3GAD5JMo/Sra4duWWyT/xtFjt0QjJP5ez+GO+esg/PbKY2qrsxz/ksDhRl17HP4qv2MeD0MY/MK54PnBCxj/XrBi1XLTFP36ruCtJJsU/JKpYojWYxD/KqPgYIgrEP3CnmI8OfMM/F6Y4Bvvtwj++pNh851/CP2SjePPT0cE/CqIYasBDwT+woLjgrLXAP1efWFeZJ8A/+zvxmwszvz9IOTGJ5Ba+P5Q2cXa9+rw/4jOxY5beuz8uMfFQb8K6P3suMT5Iprk/yCtxKyGKuD8UKbEY+m23P2Im8QXTUbY/riMx86s1tT/7IHHghBm0P0gesc1d/bI/lRvxujbhsT/iGDGoD8WwP10s4irRUa8/9iZiBYMZrT+QIeLfNOGqP5Ah4t804ao/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[120]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDcAvwY+P0/wNwC/Bj4/T9IMrglqsH9P7S9h0D4hv0/uUkNk1RL/T+KOXi/wwr9PxlLdOf5xvw/w25j5wyA/D/cXpmoPzL8P6PVkMkI3/s/x75O+3aF+z889aE5BCT7P605zluiu/o/WNmd+6dI+j/LqnVN68/5P+wntSXlTPk/+Me8VxTA+D8niWKn8yj4P1uYHAEfi/c/Xg1bUqDh9j9zfD882DD2P1zLjkE7efU/gROTHWm69D9chuU+FvXzP2/WddkQLPM/tHG+Cmhj8j/f3GyBj5jxP9zaxFuGzvA/S0GaQqsF8D+brdKg1n7uPyRvUqx6/Ow/ZxhdZWeE6z+cI9EtTRrqP9IrMJMav+g/bPNC6YZv5z9bt9PKcjLmP0xmtLGP/uQ/l/W450Pb4z/cfSylPMTiP5gQIC46vOE/qOXdaijC4D98ZatSTp7fP774MEOzz90/G+5ZZC0V3D98s2vVfGzaPzaUbh372Ng/wt736BpQ1z8IT02AJODVP0WWAH4xgNQ/aS7bZMYx0z8Hif1l//rRP8+aRARX4dA/WCrjtG3Hzz+JAXiOiPLNP4WN68x0Xsw/4LXi1SASyz9xHsm0nhPKP4zO7nGAUsk/UAPnpozfyD/aK0ZcqrDIPwAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[120]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67838&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67837&quot;}},&quot;id&quot;:&quot;67811&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67842&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67813&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;67850&quot;},{&quot;id&quot;:&quot;67848&quot;}]},&quot;id&quot;:&quot;67851&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67840&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67801&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67811&quot;}},&quot;id&quot;:&quot;67815&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67841&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67835&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;BWyM8Ga70z+ybDy1cALUP19t7Hl6SdQ/C26cPoSQ1D+4bkwDjtfUP2Vv/MeXHtU/EnCsjKFl1T+/cFxRq6zVP2txDBa189U/GHK82r461j/FcmyfyIHWP3JzHGTSyNY/H3TMKNwP1z/LdHzt5VbXP3h1LLLvndc/JXbcdvnk1z/Sdow7AyzYP393PAANc9g/K3jsxBa62D/YeJyJIAHZP4V5TE4qSNk/Mnr8EjSP2T/feqzXPdbZP4t7XJxHHdo/OHwMYVFk2j/lfLwlW6vaP5J9bOpk8to/kn1s6mTy2j+SfWzqZPLaP+V8vCVbq9o/OHwMYVFk2j+Le1ycRx3aP996rNc91tk/Mnr8EjSP2T+FeUxOKkjZP9h4nIkgAdk/K3jsxBa62D9/dzwADXPYP9J2jDsDLNg/JXbcdvnk1z94dSyy753XP8t0fO3lVtc/H3TMKNwP1z9ycxxk0sjWP8VybJ/IgdY/GHK82r461j9rcQwWtfPVP79wXFGrrNU/EnCsjKFl1T9lb/zHlx7VP7huTAOO19Q/C26cPoSQ1D9fbex5eknUP7JsPLVwAtQ/BWyM8Ga70z8FbIzwZrvTPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[56]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZNlS+IrZAkBk2VL4itkCQDx2qDUvuAJAuC5mRz+RAkDc0f4h/GYCQKe+YwZqOQJAfCSLELwJAkAPwIWzTtgBQH+QzMjRpgFAX2OIfHZ1AUBNpOYQf0QBQDQ9TLw9FAFAXqyecL7lAEB64VfYHbkAQAUnwm7GjgBAwCTlRapnAECpf1g7j0EAQKSgem7bHwBAtUJo+Zr9/z9+0Z8UtMH/P5BvRU3lif8/NxzrIg1U/z/Hr6fWSyH/P+gCQ9GP7/4/+bqWUZe+/j/ZGZqj/4z+PwGUddF9XP4/hmqckcIr/j8AAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[56]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67840&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67839&quot;}},&quot;id&quot;:&quot;67816&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67811&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67812&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67813&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67815&quot;}},&quot;id&quot;:&quot;67814&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;67849&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;67850&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67817&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;P34cr2452z/rfsxzeIDbP5h/fDiCx9s/RYAs/YsO3D/ygNzBlVXcP5+BjIafnNw/S4I8S6nj3D/4guwPsyrdP6WDnNS8cd0/UoRMmca43T/+hPxd0P/dP6uFrCLaRt4/WIZc5+ON3j8Fhwys7dTeP7KHvHD3G98/XohsNQFj3z8LiRz6CqrfP7iJzL4U8d8/MkW+QQ8c4D+JRRYklD/gP99FbgYZY+A/NkbG6J2G4D+MRh7LIqrgP+JGdq2nzeA/OUfOjyzx4D+PRyZysRThP+ZHflQ2OOE/5kd+VDY44T/mR35UNjjhP49HJnKxFOE/OUfOjyzx4D/iRnatp83gP4xGHssiquA/NkbG6J2G4D/fRW4GGWPgP4lFFiSUP+A/MkW+QQ8c4D+4icy+FPHfPwuJHPoKqt8/XohsNQFj3z+yh7xw9xvfPwWHDKzt1N4/WIZc5+ON3j+rhawi2kbeP/6E/F3Q/90/UoRMmca43T+lg5zUvHHdP/iC7A+zKt0/S4I8S6nj3D+fgYyGn5zcP/KA3MGVVdw/RYAs/YsO3D+Yf3w4gsfbP+t+zHN4gNs/P34cr2452z8/fhyvbjnbPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[56]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI7VwfC+j/D8jtXB8L6P8P8WWP/GgJ/0/xN3I07+3/T+SeFDSik/+P2HKd1Tg6/4/wITZRimO/z/VIipWpxgAQAR12W0oawBAqn85HGC9AECUFCoXYQ0BQBE9IwXrWQFAJW03N6miAUDiIjZcbOcBQGsIeGcdJwJAQbC6CkJgAkBBBtDDS5MCQJ+7LiwkwAJAIrjP68zmAkDSy9oO+gQDQNFB+uk7HANAYqzuHHwrA0AaLsmUqDQDQFMwtsq2NQNAAmDh1xQwA0BWdYK0lCMDQB4ygcSREANAcWvfGEn3AkAAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[56]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67842&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67841&quot;}},&quot;id&quot;:&quot;67821&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;67784&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;67787&quot;},{&quot;id&quot;:&quot;67791&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;67788&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;67814&quot;},{&quot;id&quot;:&quot;67819&quot;},{&quot;id&quot;:&quot;67824&quot;},{&quot;id&quot;:&quot;67829&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;67832&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;67802&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;67776&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;67780&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;67778&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;67782&quot;}},&quot;id&quot;:&quot;67775&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67792&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67818&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67816&quot;}},&quot;id&quot;:&quot;67820&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67835&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67789&quot;}},&quot;id&quot;:&quot;67788&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67844&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67823&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67837&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67843&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67821&quot;}},&quot;id&quot;:&quot;67825&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67838&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67800&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67816&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67817&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67818&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67820&quot;}},&quot;id&quot;:&quot;67819&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67822&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;67775&quot;},0,0]]},&quot;id&quot;:&quot;67848&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;PEjWNrtb4T+SSC4ZQH/hP+lIhvvEouE/P0ne3UnG4T+WSTbAzunhP+xJjqJTDeI/QkrmhNgw4j+ZSj5nXVTiP+9Klknid+I/RkvuK2eb4j+cS0YO7L7iP/JLnvBw4uI/SUz20vUF4z+fTE61einjP/ZMppf/TOM/TE3+eYRw4z+iTVZcCZTjP/lNrj6Ot+M/T04GIRPb4z+mTl4DmP7jP/xOtuUcIuQ/Uk8OyKFF5D+pT2aqJmnkP/9PvoyrjOQ/VlAWbzCw5D+sUG5RtdPkPwJRxjM69+Q/WVEeFr8a5T+vUXb4Qz7lPwZSztrIYeU/XFImvU2F5T+yUn6f0qjlPwlT1oFXzOU/X1MuZNzv5T+2U4ZGYRPmPwxU3ijmNuY/YlQ2C2ta5j+5VI7t733mPw9V5s90oeY/ZlU+svnE5j+8VZaUfujmPxJW7nYDDOc/aVZGWYgv5z+/Vp47DVPnPxZX9h2Sduc/bFdOABea5z/CV6bim73nPxlY/sQg4ec/b1hWp6UE6D/GWK6JKijoPxxZBmyvS+g/clleTjRv6D/JWbYwuZLoPx9aDhM+tug/dlpm9cLZ6D/MWr7XR/3oPyJbFrrMIOk/eVtunFFE6T/PW8Z+1mfpPyZcHmFbi+k/fFx2Q+Cu6T/SXM4lZdLpPyldJgjq9ek/f11+6m4Z6j/WXdbM8zzqPyxeLq94YOo/gl6Gkf2D6j/ZXt5zgqfqPy9fNlYHy+o/hl+OOIzu6j/cX+YaERLrPzJgPv2VNes/iWCW3xpZ6z/fYO7Bn3zrPzZhRqQkoOs/jGGehqnD6z/iYfZoLufrPzliTkuzCuw/j2KmLTgu7D/lYv4PvVHsPzxjVvJBdew/kmOu1MaY7D/pYwa3S7zsPz9kXpnQ3+w/lWS2e1UD7T/sZA5e2ibtP+xkDl7aJu0/7GQOXtom7T+VZLZ7VQPtPz9kXpnQ3+w/6WMGt0u87D+SY67UxpjsPzxjVvJBdew/5WL+D71R7D+PYqYtOC7sPzliTkuzCuw/4mH2aC7n6z+MYZ6GqcPrPzZhRqQkoOs/32DuwZ986z+JYJbfGlnrPzJgPv2VNes/3F/mGhES6z+GX444jO7qPy9fNlYHy+o/2V7ec4Kn6j+CXoaR/YPqPyxeLq94YOo/1l3WzPM86j9/XX7qbhnqPyldJgjq9ek/0lzOJWXS6T98XHZD4K7pPyZcHmFbi+k/z1vGftZn6T95W26cUUTpPyJbFrrMIOk/zFq+10f96D92Wmb1wtnoPx9aDhM+tug/yVm2MLmS6D9yWV5ONG/oPxxZBmyvS+g/xliuiSoo6D9vWFanpQToPxlY/sQg4ec/wlem4pu95z9sV04AF5rnPxZX9h2Sduc/v1aeOw1T5z9pVkZZiC/nPxJW7nYDDOc/vFWWlH7o5j9mVT6y+cTmPw9V5s90oeY/uVSO7e995j9iVDYLa1rmPwxU3ijmNuY/tlOGRmET5j9fUy5k3O/lPwlT1oFXzOU/slJ+n9Ko5T9cUia9TYXlPwZSztrIYeU/r1F2+EM+5T9ZUR4WvxrlPwJRxjM69+Q/rFBuUbXT5D9WUBZvMLDkP/9PvoyrjOQ/qU9mqiZp5D9STw7IoUXkP/xOtuUcIuQ/pk5eA5j+4z9PTgYhE9vjP/lNrj6Ot+M/ok1WXAmU4z9MTf55hHDjP/ZMppf/TOM/n0xOtXop4z9JTPbS9QXjP/JLnvBw4uI/nEtGDuy+4j9GS+4rZ5viP+9Klknid+I/mUo+Z11U4j9CSuaE2DDiP+xJjqJTDeI/lkk2wM7p4T8/Sd7dScbhP+lIhvvEouE/kkguGUB/4T88SNY2u1vhPzxI1ja7W+E/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[174]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMSH/JnQcJo/xIf8mdBwmj+bydexjDSaP5cUkFqKM5o/ChbUXJxkmj9a/cw21c+aP+JPzXoTm5s/rZI/i/XrnD/gd+DnORyfP8uhi5CrFaE/ehihxvANoz9fXidzL4mlP6Li6iCzmKg/4SlKGV9ArD8zQAccnSSwPyec2Q/kbbI/5Bhx84DxtD/gvdfNCaK3PwFp79Fab7o/tVGuoWRUvT+huQwmVyTAPxyB69nFqcE/+EFgygcuwz83QXlEJrLEP5Sy28J9OsY/GqcunWjKxz9C3D3RV27JP3M/Kn/ZH8s/T8ltb2PpzD9nSqd42MnOP6GpmtjzX9A/Iv2B1Ypo0T9E67YdcHzSP7TnpCaVo9M/SK+YtHbW1D8BIriJ9hDWPz6gJNgsUdc/FRyYZxWS2D+rWn7gV9HZP0h42q2QEts//LAu48tL3D9YTl9DtXjdP66z8EqpoN4/fCCSdx7C3z8rNrBtX3DgP00dgH6D/uA/BvJPhqCH4T+dG5KzkBXiP3j01ogbr+I/89v3Ma5M4z9WlNBxnvTjPxBx7XPfqOQ/h4FW2iBx5T8gyyarv0zmP6vLWJLOOuc//VLR/mc+6D/q5VKl6lnpP5MovbXsi+o/w7kyTRnY6z+KTjmx6DftP4m/zcA2qu4/80cFvowX8D9W8IT5KOHwPwCv6neDr/E/PGJaqqB/8j/jSM9cj0/zPwTPApQsGvQ/hMsCao/e9D95yfr/JZn1P5umYv/GR/Y/aWOYtnLn9j+a5xuNpHn3PzUqXFYX+/c/iLQQ4Rps+D8LUz86M834P9FP0GItH/k/ewGoJmRm+T9r++7omqL5P7AAlbsw2/k/pw0izQYP+j+YH6Ldokf6PyM5+JBLgPo/RcC0akzA+j+7UwVIown7P5xfWmtOXfs/TjAF1gK++z+ZZKDvyyr8PwAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[174]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67844&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67843&quot;}},&quot;id&quot;:&quot;67826&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67828&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67795&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67826&quot;}},&quot;id&quot;:&quot;67830&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;67799&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67821&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67822&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67823&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67825&quot;}},&quot;id&quot;:&quot;67824&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67798&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67785&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67801&quot;}},&quot;id&quot;:&quot;67796&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67827&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67800&quot;}},&quot;id&quot;:&quot;67794&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67797&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67839&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67793&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67788&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;67791&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67826&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67827&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67828&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67830&quot;}},&quot;id&quot;:&quot;67829&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67780&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67784&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;67787&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67812&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67782&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;67832&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;67802&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;67792&quot;},{&quot;id&quot;:&quot;67793&quot;},{&quot;id&quot;:&quot;67794&quot;},{&quot;id&quot;:&quot;67795&quot;},{&quot;id&quot;:&quot;67796&quot;},{&quot;id&quot;:&quot;67797&quot;},{&quot;id&quot;:&quot;67798&quot;},{&quot;id&quot;:&quot;67799&quot;}]},&quot;id&quot;:&quot;67849&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;67792&quot;},{&quot;id&quot;:&quot;67793&quot;},{&quot;id&quot;:&quot;67794&quot;},{&quot;id&quot;:&quot;67795&quot;},{&quot;id&quot;:&quot;67796&quot;},{&quot;id&quot;:&quot;67797&quot;},{&quot;id&quot;:&quot;67798&quot;},{&quot;id&quot;:&quot;67799&quot;}]},&quot;id&quot;:&quot;67802&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67833&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67785&quot;}},&quot;id&quot;:&quot;67784&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67778&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67789&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67833&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;}],&quot;root_ids&quot;:[&quot;67851&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"0bd72efa-5eb5-4fa4-aab6-b83e48606a42","root_ids":["67851"],"roots":{"67851":"1709f475-57ea-44b6-8381-0dbb823752bc"}}];
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