
define([ "underscore", "backbone"], function( _, Backbone ) {

    const aModel = function (opt) {
        Backbone.Model.call(this, opt);
    };


    aModel.prototype = Object.assign( Object.create( Backbone.Model.prototype ), {

          // Overriding set
        set: function( attributes, options ) {

            _.each( attributes, function( value, key ){
                if ( Array.isArray( value ) ) attributes[ key + "_joined" ] = value.join() ;
            });

            return Backbone.Model.prototype.set.call( this, attributes, options );
        }
    });

    aModel.extend = Backbone.Model.extend;

    return aModel;

});
