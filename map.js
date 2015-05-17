// Allgemeine Rückgaben im Kopfbereich
function headerNotification( value ) { $( '#target-headerNotification' ).slideDown( 200 ).html( value ).delay( 2000 ).slideUp( 500 ); }
function headerNotification_ON( value ) { $( '#target-headerNotification' ).slideDown( 200 ).html( value ); }
function headerNotification_QuickON( value ) { $( '#target-headerNotification' ).show().html( value ); }
function headerNotification_OFF( value ) { $( '#target-headerNotification' ).slideUp( 200 ); }


$( document ).ready( function() {

	// Bootstrap
	$( '.dropdown-toggle' ).dropdown()
	$('[data-toggle="tooltip"]').tooltip()


	// Darstellung anpassen
	var windowWidth = $( window ).width();
	var windowHeight = $( window ).height();
	
	if( windowWidth < 768 ) { var headerBorderHeight = 15; } else { var headerBorderHeight = 30; }
	var headerHeight = $( 'header' ).height() + headerBorderHeight;
	$( '#vfnnrw-map' ).height( windowHeight + 'px' );
	$( '#vfnnrw-map' ).width( windowWidth + 'px' );
	
	if( windowWidth < 768 ) { 
		
		$( '#details' ).css( 'height', windowHeight - headerHeight + 'px' );
		$( '#details' ).css( 'width', windowWidth + 'px' );
		$( '#details' ).css( 'left', '0' );
		$( '#details' ).css( 'top', headerHeight + 'px' );
		
		$( '#sharing' ).css( 'height', windowHeight - headerHeight + 'px' );
		$( '#sharing' ).css( 'width', windowWidth + 'px' );
		$( '#sharing' ).css( 'left', '0' );
		$( '#sharing' ).css( 'top', headerHeight + 'px' );
		
		$( '#address' ).css( 'height', windowHeight - headerHeight + 'px' );
		$( '#address' ).css( 'width', windowWidth + 'px' );
		$( '#address' ).css( 'left', '0' );
		$( '#address' ).css( 'top', headerHeight + 'px' );
		
	} else if ( windowWidth < 1280 ) {
	
		$( '#details' ).css( 'height', windowHeight - headerHeight - 120 + 'px' );
		$( '#details' ).css( 'width', windowWidth - 240 + 'px' );
		$( '#details' ).css( 'left', '120px' );
		$( '#details' ).css( 'top', headerHeight + 60 + 'px' );
		
		$( '#sharing' ).css( 'height', '320px' );
		$( '#sharing' ).css( 'width', '600px' );
		$( '#sharing' ).css( 'left', ( windowWidth / 2 ) - ( $( '#sharing' ).width() / 2 + 30 ) + 'px' );
		$( '#sharing' ).css( 'top', '110px' );
		
		$( '#address' ).css( 'height', '260px' );
		$( '#address' ).css( 'width', '600px' );
		$( '#address' ).css( 'left', ( windowWidth / 2 ) - ( $( '#sharing' ).width() / 2 + 30 ) + 'px' );
		$( '#address' ).css( 'top', '110px' );
	
	} else {

		$( '#details' ).css( 'height', windowHeight - headerHeight - 120 + 'px' );
		$( '#details' ).css( 'width', ( windowWidth / 1.5 ) - 40 + 'px' );
		$( '#details' ).css( 'left', ( windowWidth / 2 ) - ( $( '#details' ).width() / 2 + 30 ) + 'px' );
		$( '#details' ).css( 'top', headerHeight + 60 + 'px' );
		
		$( '#sharing' ).css( 'height', '320px' );
		$( '#sharing' ).css( 'width', '600px' );
		$( '#sharing' ).css( 'left', ( windowWidth / 2 ) - ( $( '#sharing' ).width() / 2 + 30 ) + 'px' );
		$( '#sharing' ).css( 'top', '110px' );
		
		$( '#address' ).css( 'height', '260px' );
		$( '#address' ).css( 'width', '600px' );
		$( '#address' ).css( 'left', ( windowWidth / 2 ) - ( $( '#sharing' ).width() / 2 + 30 ) + 'px' );
		$( '#address' ).css( 'top', '110px' );
		
	}
	
	$( '#details' ).hide();
	$( '#sharing' ).hide();
	$( '#address' ).hide();
	$( '#geocoords-container' ).hide();
	headerNotification_OFF();
	
	
	
	// Darstellung bei Größenänderung des Festers anpassen
	$( window ).resize( function () {
		
		var windowWidth = $( window ).width();
		var windowHeight = $( window ).height();
		
		if( windowWidth < 768 ) { var headerBorderHeight = 15; } else { var headerBorderHeight = 30; }
		var headerHeight = $( 'header' ).height() + headerBorderHeight;
		$( '#vfnnrw-map' ).height( windowHeight + 'px' );
		$( '#vfnnrw-map' ).width( windowWidth + 'px' );
		
		if( windowWidth < 768 ) { 
			
			$( '#details' ).css( 'height', windowHeight - headerHeight + 'px' );
			$( '#details' ).css( 'width', windowWidth + 'px' );
			$( '#details' ).css( 'left', '0' );
			$( '#details' ).css( 'top', headerHeight + 'px' );
			
			$( '#sharing' ).css( 'height', windowHeight - headerHeight + 'px' );
			$( '#sharing' ).css( 'width', windowWidth + 'px' );
			$( '#sharing' ).css( 'left', '0' );
			$( '#sharing' ).css( 'top', headerHeight + 'px' );
			
			$( '#address' ).css( 'height', windowHeight - headerHeight + 'px' );
			$( '#address' ).css( 'width', windowWidth + 'px' );
			$( '#address' ).css( 'left', '0' );
			$( '#address' ).css( 'top', headerHeight + 'px' );
			
		} else if ( windowWidth < 1280 ) {
		
			$( '#details' ).css( 'height', windowHeight - headerHeight - 120 + 'px' );
			$( '#details' ).css( 'width', windowWidth - 240 + 'px' );
			$( '#details' ).css( 'left', '120px' );
			$( '#details' ).css( 'top', headerHeight + 60 + 'px' );
			
			$( '#sharing' ).css( 'height', '320px' );
			$( '#sharing' ).css( 'width', '600px' );
			$( '#sharing' ).css( 'left', ( windowWidth / 2 ) - ( $( '#sharing' ).width() / 2 + 30 ) + 'px' );
			$( '#sharing' ).css( 'top', '110px' );
			
			$( '#address' ).css( 'height', '260px' );
			$( '#address' ).css( 'width', '600px' );
			$( '#address' ).css( 'left', ( windowWidth / 2 ) - ( $( '#sharing' ).width() / 2 + 30 ) + 'px' );
			$( '#address' ).css( 'top', '110px' );
		
		} else {
	
			$( '#details' ).css( 'height', windowHeight - headerHeight - 120 + 'px' );
			$( '#details' ).css( 'width', ( windowWidth / 1.5 ) - 40 + 'px' );
			$( '#details' ).css( 'left', ( windowWidth / 2 ) - ( $( '#details' ).width() / 2 + 30 ) + 'px' );
			$( '#details' ).css( 'top', headerHeight + 60 + 'px' );
			
			$( '#sharing' ).css( 'height', '320px' );
			$( '#sharing' ).css( 'width', '600px' );
			$( '#sharing' ).css( 'left', ( windowWidth / 2 ) - ( $( '#sharing' ).width() / 2 + 30 ) + 'px' );
			$( '#sharing' ).css( 'top', '110px' );
			
			$( '#address' ).css( 'height', '260px' );
			$( '#address' ).css( 'width', '600px' );
			$( '#address' ).css( 'left', ( windowWidth / 2 ) - ( $( '#sharing' ).width() / 2 + 30 ) + 'px' );
			$( '#address' ).css( 'top', '110px' );
			
		}
		
		$( '#details' ).hide();
		$( '#sharing' ).hide();
		$( '#address' ).hide();
		headerNotification_OFF();
		
	});
	
	

	// Alert
	// alert( 'Wir rollen gerade ein Update für unser System aus. In der neuen Version haben sich einige Grundlagen für die Bewertung von Verbindung- und Link-Qualität geändert. Daher erscheinen momentan einige Verbindungen schlechter als sie sind und manche Knoten erscheinen offline, obwohl sie es nicht sind. Das Netz selbst läuft aber normal. Wir passen die Darstellung an, wenn wir mit dem Update fertig sind. Also: Keine Panik ;)' );
	
		
	
	// Position laden
	if( getURLParameter('x') != null ) { var mapX = parseFloat( getURLParameter('x') ); }	else { var mapX = baseCoordX; };
	if( getURLParameter('y') != null ) { var mapY = parseFloat( getURLParameter('y') ); } 	else { var mapY = baseCoordY; };
	if( getURLParameter('z') != null ) { var mapZ = parseFloat( getURLParameter('z') ); } 	else { var mapZ = baseCoordZ; };
	if( getURLParameter('n') != null ) { var mapN = parseInt( getURLParameter('n') ); } 	else { var mapN = null; };
	
	
	
	// Falls eine Knoten ID übergeben wurde, Knotendetails öffnen
	if( mapN != null ) { showNodeDetails( mapN ); }
	


	// Knotenlayer Nah
	var nodesLayer = new ol.layer.Vector({
		
        title: 'Nodes',
        source: sourceNodes,
        style: function( feature ) {

			if( feature.get('active') == true ) { 
				
				if( feature.get( 'vpnActive' ) == true ) { var pointColor = 'rgba(128, 255, 0, 1)'; }
				else if( feature.get( 'gatewayQuality' ) > 200 ) { var pointColor = 'rgba(153, 204, 0, 1)'; }
				else if( feature.get( 'gatewayQuality' ) > 100 ) { var pointColor = 'rgba(255, 215, 0, 1)'; }
				else { var pointColor = 'rgba(210, 105, 30, 1)'; }
				
				var pointStrokeColor = 'rgba(0, 0, 0, 1)'; var pointStrokeWidth = 1;
			
			} else { 
				
				var pointColor = 'rgba(255, 128, 0, 0.3)'; 
				var pointStrokeColor = 'rgba(50, 50, 50, 0.8)';
				
			}
			
			style = [
				
	            new ol.style.Style({
    	        		image: 	new ol.style.Circle({
        	        				radius: 6,
									fill: new ol.style.Fill({ color: pointColor }),
									stroke: new ol.style.Stroke({ color: pointStrokeColor, width: pointStrokeWidth })
              					})
            	})
            	
            ];
            
            return style;

          }
      
    });
    
     
    
    // Knotenlayer Neue Knoten
    var newNodesLayerON = false;
	var newNodesLayer = new ol.layer.Vector({
		
        title: 'newNodes',
        source: sourceNewNodes,
        style: function( feature ) {

			var pointColor = 'rgba(0, 191, 255, 1)';
			var pointStrokeColor = 'rgba(0, 0, 0, 1)'; var pointStrokeWidth = 1;
			
			style = [
				
	            new ol.style.Style({
    	        		image: 	new ol.style.Circle({
        	        				radius: 6,
									fill: new ol.style.Fill({ color: pointColor }),
									stroke: new ol.style.Stroke({ color: pointStrokeColor, width: pointStrokeWidth })
              					})
            	})
            	
            ];
            
            return style;

          }
      
    });
    
    
    // Knotenlayer Verlorene Knoten
    var lostNodesLayerON = false;
	var lostNodesLayer = new ol.layer.Vector({
		
        title: 'lostNodes',
        source: sourceLostNodes,
        style: function( feature ) {

			if( feature.get( 'lastSeenDays' ) < 40 ) { var pointColor = 'rgba(255, 0, 0, 0.8)'; }
			else if( feature.get( 'lastSeenDays' ) < 180 ) { var pointColor = 'rgba(255, 131, 250, 0.8)'; }
			else if( feature.get( 'lastSeenDays' ) < 365 ) { var pointColor = 'rgba(255, 131, 250, 0.5)'; }
			else { var pointColor = 'rgba(255, 131, 250, 0.3)'; }
			
			var pointStrokeColor = 'rgba(0, 0, 0, 1)'; var pointStrokeWidth = 1;
			
			style = [
				
	            new ol.style.Style({
    	        		image: 	new ol.style.Circle({
        	        				radius: 6,
									fill: new ol.style.Fill({ color: pointColor }),
									stroke: new ol.style.Stroke({ color: pointStrokeColor, width: pointStrokeWidth })
              					})
            	})
            	
            ];
            
            return style;

          }
      
    });
        
    
    /*
    var nodesLayerActiveSVG = new ol.layer.Vector({
        title: 'Nodes Active',
        source: sourceNodes,
        style: function( feature ) {

			if( feature.get('active') == true ) {
            
	            style = [
	            	
	            	new ol.style.Style({
		            	image: 	new ol.style.Icon(({
		                            scale: 0.3,
		                            anchor: [0.5, 1],
		                            anchorXUnits: 'fraction',
		                            anchorYUnits: 'fraction',
		                            opacity: 0.8,
		                            src: 'pointer.svg'
	                    		}))    		
	            	}),
	            	
	            	new ol.style.Style({
		            	text: 	new ol.style.Text({
									font: '12px helvetica,sans-serif',
									text: feature.get('name'),
									textAlign : 'left',
									offsetX: 10,
									offsetY: -15,
									fill: new ol.style.Fill({ color: '#000' })
								})
	                })
	                
	            ];
	           
	        } else { style = []; }

            return style;

       	},
        maxResolution: 0.4
    });
	*/
	
    
    
    // Mesklinklayer
    var meshlinkLayer = new ol.layer.Vector({
	    
        title: 'Meshlinks',
        source: sourceMeshlinks,
        style: function( feature ) {
	        
	        if( feature.get('linkQuality') < 1.2 ) { var linkColor = 'rgba(128, 255, 0, 0.9)'; } 
	        else if( feature.get('linkQuality') < 1.4 ) { var linkColor = 'rgba(178, 255, 102, 0.8)'; }
            else if( feature.get('linkQuality') < 1.8 ) { var linkColor = 'rgba(255, 255, 0, 0.7)'; }
            else if( feature.get('linkQuality') < 2.5 ) { var linkColor = 'rgba(255, 255, 102, 0.6)'; }
            else if( feature.get('linkQuality') < 3.0 ) { var linkColor = 'rgba(255, 128, 0, 0.5)'; }
            else if( feature.get('linkQuality') < 5.0 ) { var linkColor = 'rgba(255, 178, 102, 0.4)'; }
            else { var linkColor = 'rgba(255, 0, 0, 0.3)'; }
                   
            style = [
	            
            	new ol.style.Style({
                		stroke: 	new ol.style.Stroke({
	                         				color: linkColor,
							 				width: 2
                      				})
                })
            
            ];
            
            return style;
                  
        },
        maxResolution: 3
        
    });
  

	
	// Tiles
	var actualLayer = 'OSM';
		
	var tilesOSM = new ol.layer.Tile({ source: new ol.source.OSM() });
	
	var tilesBingSatellite = new ol.layer.Tile({
		visible: false,
	    source: new ol.source.BingMaps({
	    	key: bingMapsKey,
			imagerySet: 'Aerial',
			maxZoom: 19
	    })
	});
	
	var tilesBingHybrid = new ol.layer.Tile({
		visible: false,
	    source: new ol.source.BingMaps({
	    	key: bingMapsKey,
			imagerySet: 'AerialWithLabels',
			maxZoom: 19
	    })
	});
	
	var tilesBingRoad = new ol.layer.Tile({
		visible: false,
	    source: new ol.source.BingMaps({
	    	key: bingMapsKey,
			imagerySet: 'Road',
			maxZoom: 19
	    })
	});
	
	
	// Dimmer
	var dimmerON = false;
	var dimmerSource = new ol.source.GeoJSON({
		
		object: {
		   'type': 'FeatureCollection',
   		   'features': [
		      	{
			      	'type': 'Feature',
			      	'properties': {},
					"geometry": {
					    "type": "Polygon",
					    "crs": "EPSG:3857",
					    "coordinates": [[[-4e6, 4e6], [-4e6, 8e6], [4e6, 8e6], [4e6, 4e6], [-4e6, 4e6]]]
  					}
		        }
		    ]
		}
		
	});
	
	var dimmer = new ol.layer.Vector({
	
		title: 'Dimmer',
		source: dimmerSource,
		style: new ol.style.Style({
			
				fill: new ol.style.Fill({
      			color: 'rgba(0, 0, 0, 0.3)'
    		
    		})
  		}),
	
	});
	
	
	// Karte zeichnen
	var map = new ol.Map({
	    
	    target: 'vfnnrw-map',
	    layers: [
		    tilesBingSatellite,
		    tilesBingHybrid,
		    tilesBingRoad,
	    	tilesOSM,
	    	dimmer,
	        meshlinkLayer,
	        nodesLayer,
	        lostNodesLayer,
	        newNodesLayer 
		],
	    view: new ol.View({
	    	center: ol.proj.transform( [mapX, mapY], 'EPSG:4326', 'EPSG:3857' ),
	        zoom: mapZ
	    })
	   
	});
	
	dimmer.setVisible( dimmerON );
	lostNodesLayer.setVisible( newNodesLayerON );
	newNodesLayer.setVisible( newNodesLayerON );
	
	
	
	// Popup
	var element = document.getElementById( 'popup' );

	var popup = new ol.Overlay({
		
		element: element,
		positioning: 'bottom-center',
		stopEvent: false

	});
	map.addOverlay(popup);

	map.on( 'singleclick', function( event ) {
	
		$(element).popover( 'destroy' );
	
		var feature = map.forEachFeatureAtPixel( event.pixel, function(feature, layer) { 
			
			if( layer.j.title == 'Dimmer' ) { return false; }
			return feature; 
			
		});

		if (feature) {
			
			if( feature.get( 'linkQuality' ) != undefined ) {
								
				var coord = event.coordinate;
				var transCoord = ol.proj.transform(coord, "EPSG:900913", "EPSG:3857");
				
				if( feature.get('linkQuality') < 1.9 ) { var linkQualityFactor = ((( feature.get('linkQuality') * 100 ) - 100 ) / 2 ); } 
				else if( feature.get('linkQuality') < 2.9 ) { var linkQualityFactor = ((( feature.get('linkQuality') * 100 ) - 200 ) / 4 ) + 50; }
				else if( feature.get('linkQuality') < 3.9 ) { var linkQualityFactor = ((( feature.get('linkQuality') * 100 ) - 300 ) / 8 ) + 75; }
				else if( feature.get('linkQuality') < 4.9 ) { var linkQualityFactor = ((( feature.get('linkQuality') * 100 ) - 400 ) / 16 ) + 87.5; }
				else { var linkQualityFactor = 100; }
				
				var linkQuality = 100 - Math.round( linkQualityFactor );
				
				popup.setPosition( transCoord );
				$( element ).popover({
					
					'placement': 'top',
					'html': true,
					'title': 'Linkqualität: ' + linkQuality + '%' ,
					'content': 	'<p>Linkqualität (RAW): ' + feature.get( 'linkQuality' ) +
								'<p>Von: <span class="details-trigger" rel="' + feature.get ( 'FromID' ) + '">' + feature.get ( 'FromName' ) + ' (' + feature.get ( 'FromID' ) + ')</span></p>' +
								'<p>Zu: <span class="details-trigger" rel="' + feature.get ( 'ToID' ) + '">' + feature.get ( 'ToName' ) + ' (' + feature.get ( 'ToID' ) + ')</span></p>' +
								'<p>Länge: ' + feature.get ( 'lengthInMeters' ) + ' Meter</p>',
	
				});
	
				$( element ).popover( 'show' );
				$( '.details-trigger' ).click( function() { showNodeDetails( $( this ).attr( 'rel' ) ); }); 
				
			} else {
			
				var geometry = feature.getGeometry();
				var coord = geometry.getCoordinates();
				
				if( feature.get('active') == true ) { 
					
					if( feature.get( 'vpnActive' ) == true ) { var gatewayQuality = Math.round( ( parseInt( feature.get( 'gatewayQuality' ) ) * 100 ) / 255 ); }
					else if( feature.get( 'gatewayQuality' ) == '0' ) { var gatewayQuality = 0; }
					else { var gatewayQuality = Math.round( ( ( parseInt( feature.get( 'gatewayQuality' ) ) + 15 ) * 100 ) / 255 ); }
					
				} else { var gatewayQuality = 0; }
				
				if( feature.get( 'vpnActive' ) == true && feature.get('active') == true ) { var uplink = ' / Uplink aktiv'; } else { var uplink = ''; }
				
				popup.setPosition( coord );
				$( element ).popover({
					
					'placement': 'top',
					'html': true,
					'title': feature.get( 'name' ) + ' (' + feature.get ( 'id' ) + ')',
					'content': 	'<p><b>Clients:</b> ' + feature.get ( 'clients' ) + '</p>' +
								'<p><b>Verbindungsqualit&auml;t:</b> ' + gatewayQuality + ' %' + uplink + '</p>' +
								'<p><b>Letzter Gatewaykontakt:</b> ' + feature.get ( 'lastSeen' ) + '</p>' +
								'<p>vor ' + feature.get ( 'lastSeenDifference' ) + '</p>' +
								'<p><b>Firmware:</b> ' + feature.get ( 'firmwareBuild' ) + '</p>' +
								'<p><span class="details-trigger" rel="' + feature.get ( 'id' ) + '">Details</a></p>',
	
				});
	
				$( element ).popover( 'show' );
				$( '.details-trigger' ).click( function() { showNodeDetails( $( this ).attr( 'rel' ) ); }); 
			
			}
		
		} else {
			
			$( element ).popover( 'destroy' );
	
		}
	
	});
	
	var target = map.getTarget();
	var jTarget = typeof target === 'string' ? $( '#' + target ) : $( target );
	
	map.on('pointermove', function( e ) {
		
		if( e.dragging ) {
		
			$( element ).popover( 'destroy' );
			return;
		
		}
		
		var mouseCoordInMapPixels = [e.originalEvent.offsetX, e.originalEvent.offsetY];
	    var hit = map.forEachFeatureAtPixel( mouseCoordInMapPixels, function ( feature, layer ) { 
		
		    if( layer.j.title == 'Dimmer' ) { return false; }
		    return true; 
		    
		});

	    if (hit) { jTarget.css( 'cursor', 'pointer' ); } 
	    else { jTarget.css( 'cursor', '' ); }
	    
	    var geocoords =  ol.proj.transform( e.coordinate, 'EPSG:3857', 'EPSG:4326' );
	    if( geocoordsAllowChangeON == true ) {
		    
	    	$( '#geocoords-target-latitude' ).html( geocoords[0] );
			$( '#geocoords-target-longitude' ).html( geocoords[1] );
			
		}
	
	});
	
	
	
	// Browserzeile anpassen
	map.on( 'moveend', function() {
		
		var actualCenter = ( ol.proj.transform( map.getView().getCenter(), 'EPSG:3857', 'EPSG:4326' ) );
		
		window.history.pushState( 	{ urlPath: '?' + actualCenter[0] + '-' + actualCenter[1] + '-' + map.getView().getZoom() }, 
									'', 
									'?' + actualCenter[0] + '-' + actualCenter[1] + '-' + map.getView().getZoom() 
								);
								
	});
	
	
	
	// Position ermitteln
	var geolocation = new ol.Geolocation();
	geolocation.bindTo('projection', map.getView());
	
	$( '#geolocate' ).click(function() { 
	
		if( geolocation.getTracking() == false ) { geolocation.setTracking( true );	}
		if( geolocation.getPosition() != undefined ) { map.getView().setCenter( geolocation.getPosition()); map.getView().setZoom(18); } 
		
	});


	
	// Layer wechseln
	$( '#toggleLayer' ).click( function() {
		
		if( actualLayer == 'OSM' ) { tilesOSM.setVisible( false ); tilesBingSatellite.setVisible( true ); tilesBingHybrid.setVisible( false ); tilesBingRoad.setVisible( false ); actualLayer = 'BingSatellite'; }
		else if ( actualLayer == 'BingSatellite' ) { tilesOSM.setVisible( false ); tilesBingSatellite.setVisible( false ); tilesBingHybrid.setVisible( true ); tilesBingRoad.setVisible( false ); actualLayer = 'BingHybrid'; }
		else if ( actualLayer == 'BingHybrid' ) { tilesOSM.setVisible( false ); tilesBingSatellite.setVisible( false ); tilesBingHybrid.setVisible( false ); tilesBingRoad.setVisible( true ); actualLayer = 'BingRoad'; }
		else { tilesOSM.setVisible( true ); tilesBingSatellite.setVisible( false ); tilesBingHybrid.setVisible( false ); tilesBingRoad.setVisible( false ); actualLayer = 'OSM'; }
		
	});
	
	
	
	// Teilen einblenden
	$( '#social' ).click( function() { showSharing() });


	// Dimmer an/aus
	$( '#dimmer' ).click( function() {
		
		if( dimmerON == false ) { dimmer.setVisible( true ); dimmerON = true; }
		else { dimmer.setVisible( false ); dimmerON = false; }
		
	});
	
	
	// Neue Knoten an/aus
	$( '#newNodes' ).click( function() {
		
		if( newNodesLayerON == false ) { newNodesLayer.setVisible( true ); newNodesLayerON = true; }
		else { newNodesLayer.setVisible( false ); newNodesLayerON = false; }
		
	});
	
	
	// Verlorene Knoten an/aus
	$( '#lostNodes' ).click( function() {
		
		if( lostNodesLayerON == false ) { lostNodesLayer.setVisible( true ); lostNodesLayerON = true; }
		else { lostNodesLayer.setVisible( false ); lostNodesLayerON = false; }
		
	});
	
	
	// Adresse suchen
	$( '#search' ).click( function() { showAddress() });
	
	$( "#form-getCoordinates" ).submit( function ( event ) {
		
		// Absenden des Formulars verhindern
		event.preventDefault();		
		
		// Abfrage auslesen
		var address = $( '#getCoordinates-address' ).val();
			
		// Abfrage
		getCoordinates( address );
		
	});
	
	// Koordinaten von Google auslesen
	function getCoordinates( address ) {
		
		var query = $.ajax({
			
			type: "GET",
			beforeSend: function ( request ) {
				headerNotification_ON( 'Abfrage läuft ...');			
			},
			url: 'http://maps.google.com/maps/api/geocode/json',
			dataType: "json",
			data: {
	                    address: address,
	                    sensor: "true"
	                },
			success: function() {
				headerNotification_OFF();
			}
			
		}).done( function( data ) {
			
			var lat = data.results[0].geometry.location.lat;
			var lng = data.results[0].geometry.location.lng;
			var addressPosition = new ol.proj.transform( [lng, lat], 'EPSG:4326', 'EPSG:3857');
			map.getView().setCenter( addressPosition ); map.getView().setZoom(17);
			$( '#getCoordinates-address' ).val( '' );
			$( '#address' ).hide();			
				
		}).fail( function () { headerNotification( 'Konnte keine Verbindung zu Google herstellen.' ); });
		
	}
	
	
	// Zeigerkoordinaten anzeigen
	var geocoordsON = false;
	var geocoordsAllowChangeON = true;
	
	$( '#geocoords' ).click( function() {
		
		if( geocoordsON == false ) { $( '#geocoords-container' ).fadeIn( 300 ); geocoordsON = true; }
		else { $( '#geocoords-container' ).fadeOut( 300 ); geocoordsON = false; }
		
	});
	
	$( document ).keydown( function( event ) {

		var key = String.fromCharCode( event.keyCode );
		key.toUpperCase();
 
		if( key == 'L' && geocoordsAllowChangeON == true ) { 
			
			geocoordsAllowChangeON = false;
			$( '#geocoords-locked' ).html( '<i class="fa fa-lock"></i>' );
			
		} else if ( key == 'L' && geocoordsAllowChangeON == false ) {
			
			geocoordsAllowChangeON = true;
			$( '#geocoords-locked' ).html( '<i class="fa fa-unlock"></i>' );
			
		}
 
	});
	
	
	// Zum Knoten zoomen
	$( '#details-locate' ).click( function() {
		
		if( getURLParameter('n') != null ) { 
			
			var locateNodeID = parseInt( getURLParameter('n') );
		
			var queryNode = $.ajax({
				
				type: "GET",
				url: 'http://nodeapi.vfn-nrw.de/index.php/get/node/' + locateNodeID,
				dataType: "json",
				xhrFields: {
					withCredentials: false
				}			
			
			}).done( function( data ) { 
				
				$( '#details' ).slideUp( '200' );
				var nodePosition = new ol.proj.transform( [ parseFloat( data.Longitude ), parseFloat( data.Latitude ) ], 'EPSG:4326', 'EPSG:3857');
				console.log( nodePosition );
				map.getView().setCenter( nodePosition ); map.getView().setZoom(19);
			
			}).fail( function () { headerNotification( 'Konnte keine Verbindung zur API herstellen.' ); });
			
		}
	
	});
	
});



// GET Variablen aus URL auslesen
function getURLParameter( sParam ) {
	
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split( '-' );
    
    if( sURLVariables == '' ) { return null; }
    else if ( sParam == 'x' ) { return sURLVariables[0]; }
	else if ( sParam == 'y' ) { return sURLVariables[1]; }
	else if ( sParam == 'z' ) { return sURLVariables[2]; }
	else if ( sParam == 'n' ) { return sURLVariables[3]; }
	else { return null; }

};



// Details einblenden 
function showNodeDetails( nodeID ) {
	
	var windowWidth = $( window ).width();
	var windowHeight = $( window ).height();
	
	if( windowWidth < 600 ) { var headerBorderHeight = 15; } else { var headerBorderHeight = 30; }
	var headerHeight = $( 'header' ).height() + headerBorderHeight;
	
	
	$( '#details' ).slideDown( '200' );
	$( '#details-close' ).click( function() { 
		
		$( '#details' ).slideUp( '200' );
		
		// Browserzeile anpassen
		window.history.pushState(	{ urlPath: '?' + getURLParameter('x') + '-' + getURLParameter('y') + '-' + getURLParameter('z') },
									'', 
									'?' + getURLParameter('x') + '-' + getURLParameter('y') + '-' + getURLParameter('z') );
		
	});
	
	
	if( windowWidth < 600 ) { 
	
		$( '#details-content' ).css( 'height', windowHeight - headerHeight - 131 + 'px' );
		$( '#details-content' ).slimScroll({ height: windowHeight - headerHeight - 131 + 'px', distance: '0px' });
	
	} else {
		
		$( '#details-content' ).css( 'height', windowHeight - headerHeight - 251 + 'px' );
		$( '#details-content' ).slimScroll({ height: windowHeight - headerHeight - 251 + 'px', distance: '0px' });
		
	}
	
	var queryNode = $.ajax({
		
		type: "GET",
		url: 'http://nodeapi.vfn-nrw.de/index.php/get/node/' + nodeID,
		dataType: "json",
		xhrFields: {
			withCredentials: false
		}			
	
	}).done( function( data ) { 
		
		// Browserzeile anpassen
		var sPageURL = window.location.search.substring(1);
		window.history.pushState(	{ urlPath: '?' + sPageURL + '-' + data.ID },
									'', 
									'?'+ sPageURL + '-' + data.ID );					
		
		if( data.VPNActive == true ) { var gatewayQuality = Math.round( ( parseInt( data.GatewayQuality ) * 100 ) / 255 ); }
		else if( data.GatewayQuality == '0' ) { var gatewayQuality = 0; }
		else { var gatewayQuality = Math.round( ( ( parseInt( data.GatewayQuality ) + 15 ) * 100 ) / 255 ); }
		
		var htmlHome 	=	'<table class="table">'
						+		'<tr><td>Knotenname</td><td>' + data.Name + '</td></tr>'
						+		'<tr><td>ID</td><td>' + data.ID + '</td></tr>'
						+		'<tr><td>Community</td><td>' + data.Community + ' (' + data.CommunityID + ')</td></tr>'
						+		'<tr><td>Hardware ID</td><td>' + data.HWID + '&nbsp;&nbsp;&nbsp;<a href="https://freifunk.liztv.net/adm/?hwid=' + data.HWID + '" target="_blank"><i class="fa fa-user-secret"></i></a></td></tr>'
						+		'<tr><td>IPv6</td><td>' + data.IPV6 + '</td></tr>'
						+		'<tr><td>Firmware Version</td><td>' + data.Build + '</td></tr>'
						+		'<tr><td>Letzter Gatewaykontakt</td><td>' + data.LastSeen + ' (' + data.LastSeenDifference + ')</td></tr>'
						+		'<tr><td>Clients verbunden</td><td>' + data.ClientsCount + '</td></tr>'
						+		'<tr><td>Verbindungsqualität</td><td><div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="'+ gatewayQuality +'" aria-valuemin="0" aria-valuemax="100" style="width: '+ gatewayQuality +'%;">'+ gatewayQuality +'%</div></div></td></tr>'
						+	'</table>';
							
							
		var htmlAdvanced = '';
							
							
		var queryNodeAdditionalInformation = $.ajax({
		
			type: "GET",
			url: 'http://nodeapi.vfn-nrw.de/index.php/get/node/' + nodeID + '/additionalInformation',
			dataType: "json",
			xhrFields: {
				withCredentials: false
			}			
	
		}).done( function( dataAdvanced ) { 
			
			if( dataAdvanced == false ) {
				
				htmlAdvanced = 'Leider hat der Kontenbetreiber keine weiteren Informationen hinterlegt.';
				
			} else {
				
				if( dataAdvanced.LogoURL != '' ) { var logo = '<div id="details-logo"><img class="img-responsive" src="' + dataAdvanced.LogoURL + '" /></div>'; } else { var logo = ''; }
				
				htmlAdvanced 	=	logo
				 
				 				+	'<table class="table">'
								+		'<tr><td>Inhaber</td><td>' + dataAdvanced.Owner + '</td></tr>'
								+		'<tr><td>Straße</td><td>' + dataAdvanced.Street + '</td></tr>'
								+		'<tr><td>PLZ / Ort</td><td>' + dataAdvanced.Zip + ' / ' + dataAdvanced.City + '</td></tr>'
								+		'<tr><td>Telefon</td><td><a href="tel:'+ dataAdvanced.Phone +'">' + dataAdvanced.Phone + '</a></td></tr>'
								+		'<tr><td>Email</td><td><a href="mailto:' + dataAdvanced.Email + '">' + dataAdvanced.Email + '</a></td></tr>'
								+		'<tr><td>Website</td><td><a href="' + dataAdvanced.Website + '" target="_blank">' + dataAdvanced.Website + '</a></td></tr>'
								
								+		'<tr><td>Öffnungszeiten</td><td>' 	+ 'Montag: ' + dataAdvanced.OpeningHours.Monday + '<br>'
																			+ 'Dienstag: ' + dataAdvanced.OpeningHours.Tuesday + '<br>'
																			+ 'Mittwoch: ' + dataAdvanced.OpeningHours.Wednesday + '<br>'
																			+ 'Donnerstag: ' + dataAdvanced.OpeningHours.Thursday + '<br>'
																			+ 'Freitag: ' + dataAdvanced.OpeningHours.Friday + '<br>'
																			+ 'Samstag: ' + dataAdvanced.OpeningHours.Saturday + '<br>'
																			+ 'Sonntag: ' + dataAdvanced.OpeningHours.Sunday + '<br>'
								+		'</td></tr>'
								
								+		'<tr><td>Beschreibung</td><td>' + dataAdvanced.Description + '</td></tr>'
								+		'<tr><td>Wichtiger Hinweis</td><td>' + dataAdvanced.Disclaimer + '</td></tr>'
								+		'<tr><td>Originaldatei</td><td>' + dataAdvanced.Origin + '</td></tr>'
								+	'</table>';
			}
			
		}).fail( function () { htmlAdvanced = 'Leider hat der Kontenbetreiber keine weiteren Informationen hinterlegt.'; });
		
						
		$( '#details-trigger-home' ).parent().addClass( 'active' );
		$( '#details-trigger-advanced' ).parent().removeClass( 'active' );
		$( '#details-trigger-statistics' ).parent().removeClass( 'active' );
							
		$( '#details-content' ).html( htmlHome );
		
		
		$( '#details-trigger-home' ).click( function() {
			
			$( '#details-trigger-home' ).parent().addClass( 'active' );
			$( '#details-trigger-advanced' ).parent().removeClass( 'active' );
			$( '#details-trigger-statistics' ).parent().removeClass( 'active' );
						
			$( '#details-content' ).html( htmlHome );		
		
		});
		
		$( '#details-trigger-advanced' ).click( function() {
			
			$( '#details-trigger-home' ).parent().removeClass( 'active' );
			$( '#details-trigger-advanced' ).parent().addClass( 'active' );
			$( '#details-trigger-statistics' ).parent().removeClass( 'active' );
						
			$( '#details-content' ).html( htmlAdvanced );		
		
			if( windowWidth < 600 ) { 
				
				$( '#details-logo' ).css( 'width', windowWidth - 60 + 'px' ); 
				$( '#details-logo img' ).css( 'width', '100%' ); 
				$( '#details-logo' ).css( 'position', 'relative' ); 
				
			} else { $( '#details-logo' ).css( 'position', 'absolute' ); }
			
		});
		
		$( '#details-trigger-statistics' ).click( function() {
			
			$( '#details-trigger-home' ).parent().removeClass( 'active' );
			$( '#details-trigger-advanced' ).parent().removeClass( 'active' );
			$( '#details-trigger-statistics' ).parent().addClass( 'active' );
						
			$( '#details-content' ).html( 
				
				'<h4 style="text-align: center;">Clients heute</h4>' +
				'<center><img class="img-responsive" src="http://freifunk.liztv.net/clients/'+ data.HWID +'-day.png" /></center>' +
				'<h4 style="text-align: center; margin-top: 40px;">Clients diese Woche</h4>' +
				'<center><img class="img-responsive" src="http://freifunk.liztv.net/clients/'+ data.HWID +'-week.png" /></center>' +
				'<h4 style="text-align: center; margin-top: 40px;">Clients diesen Monat</h4>' +
				'<center><img class="img-responsive" src="http://freifunk.liztv.net/clients/'+ data.HWID +'-month.png" /></center>'
				
			);		
		
		});
	
	}).fail( function () { headerNotification( 'Konnte keine Verbindung zur API aufbauen' ); });
	
}


function showSharing() {
	
	var windowWidth = $( window ).width();
	var windowHeight = $( window ).height();
	
	if( windowWidth < 600 ) { var headerBorderHeight = 15; } else { var headerBorderHeight = 30; }
	var headerHeight = $( 'header' ).height() + headerBorderHeight;
	
	if( windowWidth < 600 ) { 
	
		$( '#sharing-content' ).css( 'height', windowHeight - headerHeight - 75 + 'px' );
		$( '#sharing-content' ).slimScroll({ height: windowHeight - headerHeight - 75 + 'px', distance: '0px' });
	
	}
	
	
	$( '#sharing' ).slideDown( '200' );
	$( '#sharing-close' ).click( function() { $( '#sharing' ).slideUp( '200' ); });

	$( '#sharing-target-url' ).html( window.location.href );
	
	$( '#sharing-trigger-facebook' ).attr( 'href', 'http://www.facebook.com/sharer.php?u=' + window.location.href );
	$( '#sharing-trigger-twitter' ).attr( 'href', 'http://twitter.com/home?status=' + window.location.href );
	$( '#sharing-trigger-google' ).attr( 'href', 'https://plus.google.com/share?url=' + window.location.href );
	
}


function showAddress() {
	
	var windowWidth = $( window ).width();
	var windowHeight = $( window ).height();
	
	if( windowWidth < 600 ) { var headerBorderHeight = 15; } else { var headerBorderHeight = 30; }
	var headerHeight = $( 'header' ).height() + headerBorderHeight;
	
	if( windowWidth < 600 ) { 
	
		$( '#address-content' ).css( 'height', windowHeight - headerHeight - 75 + 'px' );
		$( '#address-content' ).slimScroll({ height: windowHeight - headerHeight - 75 + 'px', distance: '0px' });
	
	}
	
	
	$( '#address' ).slideDown( '200' );
	$( '#address-close' ).click( function() { $( '#address' ).slideUp( '200' ); });
	
}