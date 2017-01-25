//= require jquery-2.2.0.min.js
//= require webjars/openlayers/3.20.1/ol.js
//= require_self

var MapView = (function ()
{
    function init()
    {
        var layers = [
            // new ol.layer.Tile( {
            //     source: new ol.source.TileWMS( {
            //         url: 'https://ahocevar.com/geoserver/wms',
            //         params: {
            //             'LAYERS': 'ne:NE1_HR_LC_SR_W_DR'
            //         }
            //     } )
            // } ),
            new ol.layer.Tile( {
                source: new ol.source.TileWMS( {
                    url: '/wmsProxy',
                    params: {
                        'LAYERS': "o2-basemap-bright",
                        'FORMAT': "image/jpeg"
                    }
                } )
            } ),
            new ol.layer.Tile( {
                source: new ol.source.TileWMS( {
                    url: '/wmsProxy',
                    params: {
                        'LAYERS': "o2-basemap-basic",
                        'FORMAT': "image/jpeg"
                    }
                } )
            } )
        ];

        var map = new ol.Map( {
            controls: ol.control.defaults().extend( [
                new ol.control.ScaleLine( {
                    units: 'degrees'
                } )
            ] ),
            layers: layers,
            target: 'map',
            view: new ol.View( {
                projection: 'EPSG:4326',
                center: [0, 0],
                zoom: 2
            } )
        } );
    }

    return {
        init: init
    }
})();