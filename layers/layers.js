var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PEAINDEC_3 = new ol.format.GeoJSON();
var features_PEAINDEC_3 = format_PEAINDEC_3.readFeatures(json_PEAINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_3.addFeatures(features_PEAINDEC_3);
var lyr_PEAINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_3, 
                style: style_PEAINDEC_3,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_3_0.png" /> 300 - 2.000<br />\
    <img src="styles/legend/PEAINDEC_3_1.png" /> 2.001 - 6.500<br />\
    <img src="styles/legend/PEAINDEC_3_2.png" /> 6.501 - 36.000<br />\
    <img src="styles/legend/PEAINDEC_3_3.png" /> 36.001 - 70.000<br />'
        });
var format_PoblacinpordeptoINDEC_4 = new ol.format.GeoJSON();
var features_PoblacinpordeptoINDEC_4 = format_PoblacinpordeptoINDEC_4.readFeatures(json_PoblacinpordeptoINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordeptoINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordeptoINDEC_4.addFeatures(features_PoblacinpordeptoINDEC_4);
var lyr_PoblacinpordeptoINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordeptoINDEC_4, 
                style: style_PoblacinpordeptoINDEC_4,
                interactive: true,
    title: 'Población por depto (INDEC)<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_4_0.png" /> 425 - 2.985<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_4_1.png" /> 2.986 - 10.675<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_4_2.png" /> 10.676 - 59.025<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_4_3.png" /> 59.026 o más<br />'
        });
var format_ViviendasruralesINDEC_5 = new ol.format.GeoJSON();
var features_ViviendasruralesINDEC_5 = format_ViviendasruralesINDEC_5.readFeatures(json_ViviendasruralesINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasruralesINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasruralesINDEC_5.addFeatures(features_ViviendasruralesINDEC_5);
var lyr_ViviendasruralesINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasruralesINDEC_5, 
                style: style_ViviendasruralesINDEC_5,
                interactive: true,
    title: 'Viviendas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_0.png" /> 250 - 700<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_1.png" /> 701 - 1.250<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_2.png" /> 1.251 - 1.700<br />\
    <img src="styles/legend/ViviendasruralesINDEC_5_3.png" /> 1.701 - 2.350<br />'
        });
var format_CabezasPorcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasPorcinosMAGyP_6 = format_CabezasPorcinosMAGyP_6.readFeatures(json_CabezasPorcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasPorcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasPorcinosMAGyP_6.addFeatures(features_CabezasPorcinosMAGyP_6);
var lyr_CabezasPorcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasPorcinosMAGyP_6, 
                style: style_CabezasPorcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas Porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasPorcinosMAGyP_6_0.png" /> 100 - 4.000<br />\
    <img src="styles/legend/CabezasPorcinosMAGyP_6_1.png" /> 4.001 - 11.250<br />\
    <img src="styles/legend/CabezasPorcinosMAGyP_6_2.png" /> 11.251 - 20.000<br />\
    <img src="styles/legend/CabezasPorcinosMAGyP_6_3.png" /> 20.001 - 30.000<br />'
        });
var format_CabezasOvinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasOvinosMAGyP_7 = format_CabezasOvinosMAGyP_7.readFeatures(json_CabezasOvinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasOvinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasOvinosMAGyP_7.addFeatures(features_CabezasOvinosMAGyP_7);
var lyr_CabezasOvinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasOvinosMAGyP_7, 
                style: style_CabezasOvinosMAGyP_7,
                interactive: true,
    title: 'Cabezas Ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasOvinosMAGyP_7_0.png" /> 1.250 - 6.250<br />\
    <img src="styles/legend/CabezasOvinosMAGyP_7_1.png" /> 6.251 - 14.000<br />\
    <img src="styles/legend/CabezasOvinosMAGyP_7_2.png" /> 14.001 - 24.000<br />\
    <img src="styles/legend/CabezasOvinosMAGyP_7_3.png" /> 24.001 - 34.000<br />'
        });
var format_CabezasCaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasCaprinosMAGyP_8 = format_CabezasCaprinosMAGyP_8.readFeatures(json_CabezasCaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasCaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasCaprinosMAGyP_8.addFeatures(features_CabezasCaprinosMAGyP_8);
var lyr_CabezasCaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasCaprinosMAGyP_8, 
                style: style_CabezasCaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas Caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasCaprinosMAGyP_8_0.png" /> 10 - 750<br />\
    <img src="styles/legend/CabezasCaprinosMAGyP_8_1.png" /> 751 - 1.500<br />\
    <img src="styles/legend/CabezasCaprinosMAGyP_8_2.png" /> 1.501 - 8.000<br />\
    <img src="styles/legend/CabezasCaprinosMAGyP_8_3.png" /> 8.001 - 30.000<br />'
        });
var format_CabezasBovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasBovinosMAGyP_9 = format_CabezasBovinosMAGyP_9.readFeatures(json_CabezasBovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasBovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasBovinosMAGyP_9.addFeatures(features_CabezasBovinosMAGyP_9);
var lyr_CabezasBovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasBovinosMAGyP_9, 
                style: style_CabezasBovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas Bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasBovinosMAGyP_9_0.png" /> 35.000 - 75.000<br />\
    <img src="styles/legend/CabezasBovinosMAGyP_9_1.png" /> 75.001 - 160.000<br />\
    <img src="styles/legend/CabezasBovinosMAGyP_9_2.png" /> 160.001 - 225.000<br />\
    <img src="styles/legend/CabezasBovinosMAGyP_9_3.png" /> 225.001 - 280.000<br />'
        });
var format_HectreasAvenaMAGyP_10 = new ol.format.GeoJSON();
var features_HectreasAvenaMAGyP_10 = format_HectreasAvenaMAGyP_10.readFeatures(json_HectreasAvenaMAGyP_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasAvenaMAGyP_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasAvenaMAGyP_10.addFeatures(features_HectreasAvenaMAGyP_10);
var lyr_HectreasAvenaMAGyP_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasAvenaMAGyP_10, 
                style: style_HectreasAvenaMAGyP_10,
                interactive: true,
    title: 'Hectáreas Avena (MAGyP)<br />\
    <img src="styles/legend/HectreasAvenaMAGyP_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasAvenaMAGyP_10_1.png" /> 1 - 8.900<br />\
    <img src="styles/legend/HectreasAvenaMAGyP_10_2.png" /> 8.901 - 16.300<br />\
    <img src="styles/legend/HectreasAvenaMAGyP_10_3.png" /> 16.301 - 20.000<br />\
    <img src="styles/legend/HectreasAvenaMAGyP_10_4.png" /> 20.001 - 30.000<br />'
        });
var format_HectreasManMAGyP_11 = new ol.format.GeoJSON();
var features_HectreasManMAGyP_11 = format_HectreasManMAGyP_11.readFeatures(json_HectreasManMAGyP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasManMAGyP_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasManMAGyP_11.addFeatures(features_HectreasManMAGyP_11);
var lyr_HectreasManMAGyP_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasManMAGyP_11, 
                style: style_HectreasManMAGyP_11,
                interactive: true,
    title: 'Hectáreas Maní (MAGyP)<br />\
    <img src="styles/legend/HectreasManMAGyP_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasManMAGyP_11_1.png" /> 1 - 300<br />\
    <img src="styles/legend/HectreasManMAGyP_11_2.png" /> 301 - 1.600<br />\
    <img src="styles/legend/HectreasManMAGyP_11_3.png" /> 1.601 - 3.500<br />'
        });
var format_HectreasMazMAGyP_12 = new ol.format.GeoJSON();
var features_HectreasMazMAGyP_12 = format_HectreasMazMAGyP_12.readFeatures(json_HectreasMazMAGyP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasMazMAGyP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasMazMAGyP_12.addFeatures(features_HectreasMazMAGyP_12);
var lyr_HectreasMazMAGyP_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasMazMAGyP_12, 
                style: style_HectreasMazMAGyP_12,
                interactive: true,
    title: 'Hectáreas Maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasMazMAGyP_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasMazMAGyP_12_1.png" /> 1 - 6.750<br />\
    <img src="styles/legend/HectreasMazMAGyP_12_2.png" /> 6.751 - 25.000<br />\
    <img src="styles/legend/HectreasMazMAGyP_12_3.png" /> 25.001 - 42.000<br />\
    <img src="styles/legend/HectreasMazMAGyP_12_4.png" /> 42.001 - 60.000<br />'
        });
var format_HectreasGirasolMAGyP_13 = new ol.format.GeoJSON();
var features_HectreasGirasolMAGyP_13 = format_HectreasGirasolMAGyP_13.readFeatures(json_HectreasGirasolMAGyP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasGirasolMAGyP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasGirasolMAGyP_13.addFeatures(features_HectreasGirasolMAGyP_13);
var lyr_HectreasGirasolMAGyP_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasGirasolMAGyP_13, 
                style: style_HectreasGirasolMAGyP_13,
                interactive: true,
    title: 'Hectáreas Girasol (MAGyP)<br />\
    <img src="styles/legend/HectreasGirasolMAGyP_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasGirasolMAGyP_13_1.png" /> 1 - 3.000<br />\
    <img src="styles/legend/HectreasGirasolMAGyP_13_2.png" /> 3.001 - 14.000<br />\
    <img src="styles/legend/HectreasGirasolMAGyP_13_3.png" /> 14.001 - 25.000<br />\
    <img src="styles/legend/HectreasGirasolMAGyP_13_4.png" /> 25.001 - 36.000<br />'
        });
var format_HectreasTrigoMAGyP_14 = new ol.format.GeoJSON();
var features_HectreasTrigoMAGyP_14 = format_HectreasTrigoMAGyP_14.readFeatures(json_HectreasTrigoMAGyP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasTrigoMAGyP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasTrigoMAGyP_14.addFeatures(features_HectreasTrigoMAGyP_14);
var lyr_HectreasTrigoMAGyP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasTrigoMAGyP_14, 
                style: style_HectreasTrigoMAGyP_14,
                interactive: true,
    title: 'Hectáreas Trigo (MAGyP)<br />\
    <img src="styles/legend/HectreasTrigoMAGyP_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreasTrigoMAGyP_14_1.png" /> 1 - 15.000<br />\
    <img src="styles/legend/HectreasTrigoMAGyP_14_2.png" /> 15.001 - 30.000<br />\
    <img src="styles/legend/HectreasTrigoMAGyP_14_3.png" /> 30.001 - 40.000<br />\
    <img src="styles/legend/HectreasTrigoMAGyP_14_4.png" /> 40.001 o más<br />'
        });
var format_HectreasSojaMAGyP_15 = new ol.format.GeoJSON();
var features_HectreasSojaMAGyP_15 = format_HectreasSojaMAGyP_15.readFeatures(json_HectreasSojaMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasSojaMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasSojaMAGyP_15.addFeatures(features_HectreasSojaMAGyP_15);
var lyr_HectreasSojaMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasSojaMAGyP_15, 
                style: style_HectreasSojaMAGyP_15,
                interactive: true,
    title: 'Hectáreas Soja (MAGyP)<br />\
    <img src="styles/legend/HectreasSojaMAGyP_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasSojaMAGyP_15_1.png" /> 1 - 1.000<br />\
    <img src="styles/legend/HectreasSojaMAGyP_15_2.png" /> 1.001 - 17.500<br />\
    <img src="styles/legend/HectreasSojaMAGyP_15_3.png" /> 17.501 - 55.000<br />\
    <img src="styles/legend/HectreasSojaMAGyP_15_4.png" /> 55.001 - 100.000<br />'
        });
var format_Capacitaciones2019tcnicas_16 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_16 = format_Capacitaciones2019tcnicas_16.readFeatures(json_Capacitaciones2019tcnicas_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_16.addFeatures(features_Capacitaciones2019tcnicas_16);
var lyr_Capacitaciones2019tcnicas_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_16, 
                style: style_Capacitaciones2019tcnicas_16,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_16.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Localidades_17 = new ol.format.GeoJSON();
var features_Localidades_17 = format_Localidades_17.readFeatures(json_Localidades_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_17.addFeatures(features_Localidades_17);
var lyr_Localidades_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_17, 
                style: style_Localidades_17,
                interactive: true,
                title: '<img src="styles/legend/Localidades_17.png" /> Localidades'
            });
var format_BER_18 = new ol.format.GeoJSON();
var features_BER_18 = format_BER_18.readFeatures(json_BER_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_18.addFeatures(features_BER_18);
var lyr_BER_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_18, 
                style: style_BER_18,
                interactive: true,
                title: '<img src="styles/legend/BER_18.png" /> BER'
            });
var format_BER_19 = new ol.format.GeoJSON();
var features_BER_19 = format_BER_19.readFeatures(json_BER_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BER_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BER_19.addFeatures(features_BER_19);
var lyr_BER_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BER_19, 
                style: style_BER_19,
                interactive: true,
                title: '<img src="styles/legend/BER_19.png" /> BER'
            });
var format_Delegacin_20 = new ol.format.GeoJSON();
var features_Delegacin_20 = format_Delegacin_20.readFeatures(json_Delegacin_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delegacin_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delegacin_20.addFeatures(features_Delegacin_20);
var lyr_Delegacin_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delegacin_20, 
                style: style_Delegacin_20,
                interactive: true,
                title: '<img src="styles/legend/Delegacin_20.png" /> Delegación'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PEAINDEC_3.setVisible(true);lyr_PoblacinpordeptoINDEC_4.setVisible(true);lyr_ViviendasruralesINDEC_5.setVisible(true);lyr_CabezasPorcinosMAGyP_6.setVisible(true);lyr_CabezasOvinosMAGyP_7.setVisible(true);lyr_CabezasCaprinosMAGyP_8.setVisible(true);lyr_CabezasBovinosMAGyP_9.setVisible(true);lyr_HectreasAvenaMAGyP_10.setVisible(true);lyr_HectreasManMAGyP_11.setVisible(true);lyr_HectreasMazMAGyP_12.setVisible(true);lyr_HectreasGirasolMAGyP_13.setVisible(true);lyr_HectreasTrigoMAGyP_14.setVisible(true);lyr_HectreasSojaMAGyP_15.setVisible(true);lyr_Capacitaciones2019tcnicas_16.setVisible(true);lyr_Localidades_17.setVisible(true);lyr_BER_18.setVisible(true);lyr_BER_19.setVisible(true);lyr_Delegacin_20.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PEAINDEC_3,lyr_PoblacinpordeptoINDEC_4,lyr_ViviendasruralesINDEC_5,lyr_CabezasPorcinosMAGyP_6,lyr_CabezasOvinosMAGyP_7,lyr_CabezasCaprinosMAGyP_8,lyr_CabezasBovinosMAGyP_9,lyr_HectreasAvenaMAGyP_10,lyr_HectreasManMAGyP_11,lyr_HectreasMazMAGyP_12,lyr_HectreasGirasolMAGyP_13,lyr_HectreasTrigoMAGyP_14,lyr_HectreasSojaMAGyP_15,lyr_Capacitaciones2019tcnicas_16,lyr_Localidades_17,lyr_BER_18,lyr_BER_19,lyr_Delegacin_20];
lyr_Departamentos_2.set('fieldAliases', {'depto': 'depto', });
lyr_PEAINDEC_3.set('fieldAliases', {'PEA': 'PEA', });
lyr_PoblacinpordeptoINDEC_4.set('fieldAliases', {'Poblacion': 'Poblacion', });
lyr_ViviendasruralesINDEC_5.set('fieldAliases', {'Viv. rur': 'Viv. rur', });
lyr_CabezasPorcinosMAGyP_6.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_CabezasOvinosMAGyP_7.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_CabezasCaprinosMAGyP_8.set('fieldAliases', {'Caprinos': 'Caprinos', });
lyr_CabezasBovinosMAGyP_9.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_HectreasAvenaMAGyP_10.set('fieldAliases', {'Avena': 'Avena', });
lyr_HectreasManMAGyP_11.set('fieldAliases', {'Mani': 'Mani', });
lyr_HectreasMazMAGyP_12.set('fieldAliases', {'Maiz': 'Maiz', });
lyr_HectreasGirasolMAGyP_13.set('fieldAliases', {'Girasol': 'Girasol', });
lyr_HectreasTrigoMAGyP_14.set('fieldAliases', {'Trigo': 'Trigo', });
lyr_HectreasSojaMAGyP_15.set('fieldAliases', {'Soja': 'Soja', });
lyr_Capacitaciones2019tcnicas_16.set('fieldAliases', {'localidad': 'localidad', 'tipo capa': 'tipo capa', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_Localidades_17.set('fieldAliases', {'localidad': 'localidad', 'personas': 'personas', });
lyr_BER_18.set('fieldAliases', {'Num': 'Num', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_BER_19.set('fieldAliases', {'Num': 'Num', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_Delegacin_20.set('fieldAliases', {'localidad': 'localidad', 'direccion': 'direccion', 'prest 2016': 'prest 2016', 'prest 2017': 'prest 2017', 'prest 2018': 'prest 2018', 'prest 2019': 'prest 2019', 'prest 2020': 'prest 2020', });
lyr_Departamentos_2.set('fieldImages', {'depto': 'TextEdit', });
lyr_PEAINDEC_3.set('fieldImages', {'PEA': '', });
lyr_PoblacinpordeptoINDEC_4.set('fieldImages', {'Poblacion': '', });
lyr_ViviendasruralesINDEC_5.set('fieldImages', {'Viv. rur': '', });
lyr_CabezasPorcinosMAGyP_6.set('fieldImages', {'Porcinos': '', });
lyr_CabezasOvinosMAGyP_7.set('fieldImages', {'Ovinos': '', });
lyr_CabezasCaprinosMAGyP_8.set('fieldImages', {'Caprinos': '', });
lyr_CabezasBovinosMAGyP_9.set('fieldImages', {'Bovinos': '', });
lyr_HectreasAvenaMAGyP_10.set('fieldImages', {'Avena': 'TextEdit', });
lyr_HectreasManMAGyP_11.set('fieldImages', {'Mani': 'TextEdit', });
lyr_HectreasMazMAGyP_12.set('fieldImages', {'Maiz': 'TextEdit', });
lyr_HectreasGirasolMAGyP_13.set('fieldImages', {'Girasol': '', });
lyr_HectreasTrigoMAGyP_14.set('fieldImages', {'Trigo': '', });
lyr_HectreasSojaMAGyP_15.set('fieldImages', {'Soja': 'TextEdit', });
lyr_Capacitaciones2019tcnicas_16.set('fieldImages', {'localidad': 'TextEdit', 'tipo capa': 'TextEdit', 'tematica': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'Range', });
lyr_Localidades_17.set('fieldImages', {'localidad': 'TextEdit', 'personas': 'TextEdit', });
lyr_BER_18.set('fieldImages', {'Num': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_BER_19.set('fieldImages', {'Num': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_Delegacin_20.set('fieldImages', {'localidad': 'TextEdit', 'direccion': '', 'prest 2016': '', 'prest 2017': '', 'prest 2018': '', 'prest 2019': '', 'prest 2020': '', });
lyr_Departamentos_2.set('fieldLabels', {'depto': 'inline label', });
lyr_PEAINDEC_3.set('fieldLabels', {'PEA': 'inline label', });
lyr_PoblacinpordeptoINDEC_4.set('fieldLabels', {'Poblacion': 'inline label', });
lyr_ViviendasruralesINDEC_5.set('fieldLabels', {'Viv. rur': 'inline label', });
lyr_CabezasPorcinosMAGyP_6.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_CabezasOvinosMAGyP_7.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_CabezasCaprinosMAGyP_8.set('fieldLabels', {'Caprinos': 'inline label', });
lyr_CabezasBovinosMAGyP_9.set('fieldLabels', {'Bovinos': 'inline label', });
lyr_HectreasAvenaMAGyP_10.set('fieldLabels', {'Avena': 'inline label', });
lyr_HectreasManMAGyP_11.set('fieldLabels', {'Mani': 'inline label', });
lyr_HectreasMazMAGyP_12.set('fieldLabels', {'Maiz': 'inline label', });
lyr_HectreasGirasolMAGyP_13.set('fieldLabels', {'Girasol': 'inline label', });
lyr_HectreasTrigoMAGyP_14.set('fieldLabels', {'Trigo': 'inline label', });
lyr_HectreasSojaMAGyP_15.set('fieldLabels', {'Soja': 'inline label', });
lyr_Capacitaciones2019tcnicas_16.set('fieldLabels', {'localidad': 'inline label', 'tipo capa': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_Localidades_17.set('fieldLabels', {'localidad': 'inline label', 'personas': 'inline label', });
lyr_BER_18.set('fieldLabels', {'Num': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_BER_19.set('fieldLabels', {'Num': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_Delegacin_20.set('fieldLabels', {'localidad': 'inline label', 'direccion': 'inline label', 'prest 2016': 'inline label', 'prest 2017': 'inline label', 'prest 2018': 'inline label', 'prest 2019': 'inline label', 'prest 2020': 'inline label', });
lyr_Delegacin_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});