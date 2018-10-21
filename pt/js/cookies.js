var daysForLife = 1065;

function setCookie( cname, cvalue )
{
	var
		d = new Date(),
		timeForLife = ( daysForLife * 24 * 60 * 60 * 1000 );

	d.setTime( d.getTime() + timeForLife );
	var expires = "expires=" + d.toUTCString();

	document.cookie = cname + "=" + cvalue;
	document.cookie = expires;
}

function checkCookie()
{
	var username = getCookie( "username" );

	if( username != "" )
	{ alert( "Welcome again " + username ); }
	else
	{
		username = prompt( "Please enter your name:", "" );

		if( username != "" && username != null )
		{ setCookie( "username", username, 365 ); }
	}
}

function getCookie( cname )
{
	var
		name = cname + "=",
		decodedCookie = decodeURIComponent( document.cookie ),
		ca = decodedCookie.split( ';' );

	for( var i=0; i < ca.length; i++ )
	{
		var c = ca[ i ];
		while( c.charAt( 0 ) == ' ' )
		{ c = c.substring( 1 ); }

		if( c.indexOf( name ) == 0 )
		{ return c.substring( name.length, c.length ); }
	}

	return "";
}