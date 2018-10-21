wgtBP = 0.0;

function clickContaPeso( ev )
{
	ev.preventDefault();
	let
		chk = $( this ).find( 'input[type="checkbox"]' ),
		opt = !$( chk ).prop( 'checked' ),
		wgt = parseFloat( $( chk ).data( 'weight' ) );

	$( chk ).prop( 'checked', opt );

	wgtBP+= ( opt ) ? wgt : -wgt;
	wgtBP = Math.round10( wgtBP, -2 );
}

function updtCampoPeso()
{
	let id = $( this ).attr( 'id' );
	$( '#cp-peso' ).html( wgtBP + "KG" );
	setCookie( id, '1' );
}