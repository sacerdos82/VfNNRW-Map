// Quellen laden
var sourceNodes = 			new ol.source.GeoJSON({
           						projection: 'EPSG:3857',
								url: 'http://nodeapi.vfn-nrw.de/index.php/get/nodes/format/geojson'
       						});
        						
var sourceMeshlinks =		new ol.source.GeoJSON({
           						projection: 'EPSG:3857',
								url: 'http://nodeapi.vfn-nrw.de/index.php/get/nodes/active/meshlinks/format/geojson'
       						});
        						
var sourceNewNodes =		new ol.source.GeoJSON({
           						projection: 'EPSG:3857',
								url: 'http://nodeapi.vfn-nrw.de/index.php/get/nodes/new/format/geojson'
       						});
        						
var sourceLostNodes =		new ol.source.GeoJSON({
           						projection: 'EPSG:3857',
								url: 'http://nodeapi.vfn-nrw.de/index.php/get/nodes/lost/format/geojson'
       						});
       						


// Basiskoordinaten
var baseCoordX = 7.179200506020559;
var baseCoordY = 51.35899118940779;
var baseCoordZ = 7;
		
       		
// Bind Maps Key
var bingMapsKey = 'YOUR BING MAPS ENTERPRISE KEY HERE';
       		
       						
$( document ).ready( function() {
	
	// Metadaten laden
	var queryNodesCount = $.ajax({
		
		type: "GET",
		url: 'http://nodeapi.vfn-nrw.de/index.php/get/nodes/count/active',
		dataType: "json",
		xhrFields: {
			withCredentials: false
		}
				
	}).done( function( data ) { 
		
		$( '#target-nodesOnline' ).html( data ); 
		if( parseInt( data ) == 0 ) { alert( 'Gegenwärtig gibt es Problem mit den Statistik-Servern. Die gezeigten Daten sind nicht korrekt. Wir arbeiten an dem Problem. Bitte habt etwas Geduld. Danke :)' ); }

	}).fail( function () { });
	
	var queryClientsCount = $.ajax({
		
		type: "GET",
		url: 'http://nodeapi.vfn-nrw.de/index.php/get/clients/count',
		dataType: "json",
		xhrFields: {
			withCredentials: false
		}
				
	}).done( function( data ) { $( '#target-clientsOnline' ).html( data ); countClients = data;
	}).fail( function () { });
	
});