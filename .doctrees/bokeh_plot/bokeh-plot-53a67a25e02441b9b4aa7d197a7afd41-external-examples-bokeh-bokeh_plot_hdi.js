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
    
      
      
    
      var element = document.getElementById("6a988d9f-2c11-4c46-83a3-c6274ca6fb73");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6a988d9f-2c11-4c46-83a3-c6274ca6fb73' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;821ac9c9-2b4c-46d1-8c9b-1b113370adef&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66878&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66861&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66889&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66888&quot;}},&quot;id&quot;:&quot;66872&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66862&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66862&quot;}},&quot;id&quot;:&quot;66857&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66843&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66877&quot;}},&quot;id&quot;:&quot;66881&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66856&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66879&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66888&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66854&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66861&quot;}},&quot;id&quot;:&quot;66855&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66889&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66858&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66849&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;66852&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;66883&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66859&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66877&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66878&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66879&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66881&quot;}},&quot;id&quot;:&quot;66880&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66874&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;66853&quot;},{&quot;id&quot;:&quot;66854&quot;},{&quot;id&quot;:&quot;66855&quot;},{&quot;id&quot;:&quot;66856&quot;},{&quot;id&quot;:&quot;66857&quot;},{&quot;id&quot;:&quot;66858&quot;},{&quot;id&quot;:&quot;66859&quot;},{&quot;id&quot;:&quot;66860&quot;}]},&quot;id&quot;:&quot;66863&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66884&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;66860&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66890&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66853&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66891&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66837&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66886&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66846&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66873&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66839&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66845&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;66848&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66850&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66886&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66850&quot;}},&quot;id&quot;:&quot;66849&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66884&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66846&quot;}},&quot;id&quot;:&quot;66845&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66872&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66873&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66874&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66876&quot;}},&quot;id&quot;:&quot;66875&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;66845&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;66848&quot;},{&quot;id&quot;:&quot;66852&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;66849&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;66875&quot;},{&quot;id&quot;:&quot;66880&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;66883&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;66863&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;66837&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;66841&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;66839&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;66843&quot;}},&quot;id&quot;:&quot;66836&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;OwXXomgsCMC6z2/+aI4GwBKxiu8w7QTAB0x7sbFfA8C5efpNQdoBwC6rJ8jZvgHAgWzdwSWeAcAB9RFm3pT2v3zpXflplPa/e7Lce/Hl9b+zIyPHm331v/Pw2aBry/K/UeWdi5ly8r+5JtZJFkbyv2RZL1gBIfK/Y4nHKYyK8b/DvsViCgnvv9b+ebEvye6/NgbA3Ry77r9768aXLfTtv6/Vw3O8te2/CyB9uSuk6b8f8rlAZVHpv22uV4qjLem/IisS5IOr6L9VcmhROLPnv0ozcLCzQua/sfCDmHY95r8toGqSJijlvzXBix4xeuS/MdUFJe0+5L8Xrs2kGirkv+Rh3ZNkheO/KImVRP1A4r+kM048uSThv/R53BhWruC/2/qeFv8v4L/E7ku9Qi/gv4q/+8Fw/t6/yzcWXEyq3b/dvRW9/37cv/Zkq2n45dm/nYax9VNw2b8oBr5u127Zvy+nf/Jqjde/BZqc4H4s1L8F9AlGwCbSv2KXlqUAoNG/8CdfcdXy0L96bZ7MX4fKv8+vWkGZYsm/jqiZjzcmxr8Q0nFse6G9vw25aojsy46/cn0eP57NlT+A2FYR6AKhPwU9j6/22aI/0Ewrb0SxsD/BGHwXhdfEPzpHVQofG8g/o+jFIYnOzz9cz8/JWxDQP75BgTJJ4NE/XoHutQSl1D8SEOkHjTPWPzy5PBPpR9Y/Vl/oDgFN2j/tHYZs+l3aPyVMnNoNF9s/XgJnvrZa2z/PVNya933bP+gFknhywt4/2yZ9UJmD3z9niZLaCHXmP2menZ/ceOY//kKbvaUc6D9oqFaBJz/oP0NpX/ndZ+g/vBi1HmKV6D/G1SoP2u3pP5oo1L3c7eo/9dvPLALq6z8b9Pb1pwfsP8egNh5U0u0/k013USmC8D+mmnL8I4TwP9RMbKNUZ/E/ds8/Cg/n8T+MWBftqL3yP8VfrSeQN/Q/sPRAnO3F9D+JGlnBNCr1P4Oxd+5NmfU/V+QdL8g++T/ORKkGpq/5P9/B+tfl2fs/yovtYWdx/D/SxHSsTN//P9c/Qd0S3QJAyLq2X3hqA0A=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;FOujdF1O3z+MYCADLuPiP9yd6iCeJeY/8mcJnZxA6T+ODAtkfUvsP6SpsG9Mguw//iZFfLTD7D+ABffMkLX0P0ILUQPLtfQ/wqYRQgcN9T8mbm4cMkH1P4YHky9KmvY/WA0xOrPG9j+k7BTb9Nz2P05T6FN/7/Y/Tjsc67k69z9PkE5nvT34P0qAoRO0Tfg/cv6PyDhR+D8hRQ6a9IL4P5QKD+OQkvg//begEfWW+T94g9Gvpqv5P2UUah2XtPk/OHX7Bh/V+T9r46XrMRP6Py7z4xNTb/o/1APfWaJw+j/1V2Vb9rX6P7MPXbhz4fo/tIq+tkTw+j96lMxWefX6P4enCNumHvs/tp3arsBv+z8Xc+yw0bb7P4PhyHlq1Ps/SUFYOgD0+z9PBK1QL/T7Pw+IwOcxIPw/Bzl9dLZK/D9ESF0IIHD8P2GTyvJAw/w/LM9JgfXR/D87PygSJdL8PxoLsKFSDv0/v2zsI3B6/T9/wT73J7v9PxQtTev/y/0/AhvUUaXh/T8oGTYDilf+PwNV6mvWaf4/d2UGh5yd/j9wcZwk9BL/P0eVdxM04f8/fR4/ns0VAECxrSLQBSIAQHoeX+2zJQBAM628EcVCAEDG4LsovKYAQDqqUvjYwABARS8OSXT+AED2/Jy8BQEBQBwUKJMEHgFAFuheS1BKAUABkX7QOGMBQJTLM5F+ZAFA9YXuENCkAUDfYcim36UBQMLEqd1wsQFAJnDma6u1AUBNxa1537cBQF4giScn7AFAbtIHlTn4AUAtUVIboc4CQM2z85MbzwJAYGizt5QDA0AN1Srw5AcDQCjtK7/7DANAGKPWQ6wSA0C5WuVBuz0DQBOFupe7XQNAf/uZRUB9A0CD3r7+9IADQBnUxoNKugNAZdNdVIogBECqphz/CCEEQDUT2yjVWQRA3vOPwsN5BEAj1kU7aq8EQPFX6wnkDQVALD0QZ3sxBUCiRlYwjUoFQGHsnXtTZgVAFnnHC7JPBkA0UaqB6WsGQHiw/nV59gZA8mJ72FkcB0A0MR0r0/cHQOyfoG6JbglAZF3bLzy1CUA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66891&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66890&quot;}},&quot;id&quot;:&quot;66877&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66841&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66872&quot;}},&quot;id&quot;:&quot;66876&quot;,&quot;type&quot;:&quot;CDSView&quot;}],&quot;root_ids&quot;:[&quot;66836&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"821ac9c9-2b4c-46d1-8c9b-1b113370adef","root_ids":["66836"],"roots":{"66836":"6a988d9f-2c11-4c46-83a3-c6274ca6fb73"}}];
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