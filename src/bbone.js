require.config({
    baseUrl: "",
    paths: {
        "backbone": "../node_modules/backbone/backbone",
        "underscore": "../node_modules/underscore/underscore",
        "jquery": "../node_modules/jquery/dist/jquery",
    }
  });
  require([ "underscore", "backbone", "../src/aModel" ], function ( _, Backbone, aModel ) {
       

        let bauGroup = new aModel();
        
        bauGroup.on( "change", function( o ){ 
            console.log("onChange: ", o);
        });

        bauGroup.set({ "order": [ "US60", "UA40"] });


        setTimeout( function(){

            bauGroup.attributes.order.push( "UA100" );
            bauGroup.set( { order: bauGroup.attributes.order } ) 

        }, 2000 );

        

       

  });