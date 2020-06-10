function toAscii( value: string ): string {
	const charArray: number[] = [];
	for ( let i = value.length - 1; 0 <= i; i -- ) {
		const charCode = charArray[ i ] = value.charCodeAt( i );
		switch ( true ) {
			case ( charCode <= 0xff5e && 0xff01 <= charCode ) :
				charArray[ i ] -= 0xfee0;
				break;
			case ( charCode === 0x3000 ):
				charArray[ i ] = 0x0020;
        break;
      case ( charCode === 0x2502 ):
        charArray[ i ] = 0xffe8;
        break;
      case ( charCode === 0x2190 ):
        charArray[ i ] = 0xffe9;
        break;
      case ( charCode === 0x2191 ):
        charArray[ i ] = 0xffea;
        break;
      case ( charCode === 0x2192 ):
        charArray[ i ] = 0xffeb;
        break;
      case ( charCode === 0x2193 ):
        charArray[ i ] = 0xffec;
        break;
      case ( charCode === 0x25A0 ):
        charArray[ i ] = 0xffed;
        break;
      case ( charCode === 0x25CB ):
        charArray[ i ] = 0xffee;
        break;
      case ( charCode === 0xFFE0 ):
        charArray[ i ] = 0x00A2;
        break;
      case ( charCode === 0xFFE1 ):
        charArray[ i ] = 0x00A3;
        break;
      case ( charCode === 0xFFE2 ):
        charArray[ i ] = 0x00AC;
        break;
      case ( charCode === 0xFFE3 ):
        charArray[ i ] = 0x00AF;
        break;
      case ( charCode === 0xFFE4 ):
        charArray[ i ] = 0x00A6;
        break;
      case ( charCode === 0xFFE5 ):
        charArray[ i ] = 0x00A5;
        break;
      case ( charCode === 0xFFE6 ):
        charArray[ i ] = 0x00A9;
        break;
    }
	}
	return String.fromCharCode.apply( null, charArray );
}

type halfwidthKanaMap = {
	[key: number]: number;
}

const halfwidthKanaMap: halfwidthKanaMap = {
	0x30A1: 0xFF67, 0x30A3: 0xFF68, 0x30A5: 0xFF69, 0x30A7: 0xFF6A, 0x30A9: 0xFF6B,
	0x30e3: 0xff6c, 0x30e5: 0xff6d, 0x30e7: 0xff6e, 0x30c3: 0xff6f, 0x30FC: 0xFF70,
	0x30A2: 0xFF71, 0x30A4: 0xFF72, 0x30A6: 0xFF73, 0x30A8: 0xFF74, 0x30AA: 0xFF75,
	0x30AB: 0xFF76, 0x30AD: 0xFF77, 0x30AF: 0xFF78, 0x30B1: 0xFF79, 0x30B3: 0xFF7A,
	0x30B5: 0xFF7B, 0x30B7: 0xFF7C, 0x30B9: 0xFF7D, 0x30BB: 0xFF7E, 0x30BD: 0xFF7F,
	0x30BF: 0xFF80, 0x30C1: 0xFF81, 0x30C4: 0xFF82, 0x30C6: 0xFF83, 0x30C8: 0xFF84,
	0x30CA: 0xFF85, 0x30CB: 0xFF86, 0x30CC: 0xFF87, 0x30CD: 0xFF88, 0x30CE: 0xFF89,
	0x30CF: 0xFF8A, 0x30D2: 0xFF8B, 0x30D5: 0xFF8C, 0x30D8: 0xFF8D, 0x30DB: 0xFF8E,
	0x30DE: 0xFF8F, 0x30DF: 0xFF90, 0x30E0: 0xFF91, 0x30E1: 0xFF92, 0x30E2: 0xFF93,
	0x30E4: 0xFF94, 0x30E6: 0xFF95, 0x30E8: 0xFF96, 0x30E9: 0xFF97, 0x30EA: 0xFF98,
	0x30EB: 0xFF99, 0x30EC: 0xFF9A, 0x30ED: 0xFF9B, 0x30EF: 0xFF9C, 0x30F3: 0xFF9D,
	0x309B: 0xFF9E, 0x309C: 0xFF9F, 0x30F2: 0xFF66,
};

function toHalfwidthKana( value: string ): string {
	const charArray: number[] = [];
	for ( let i = 0; i < value.length; i ++ ) {
		const charCode = value.charCodeAt( i );
		switch ( true ) {
			case ( charCode in halfwidthKanaMap ):
				charArray.push( halfwidthKanaMap[ charCode ] );
				break;
			case ( 0x30AB <= charCode && charCode <= 0x30C9 ):
				charArray.push( halfwidthKanaMap[ charCode - 1 ], 0xFF9E );
				break;
			case ( 0x30CF <= charCode && charCode <= 0x30DD ):
				charArray.push(
					halfwidthKanaMap[ charCode - charCode % 3 ],
					[ 0xFF9E, 0xFF9F ][ charCode % 3 - 1 ]
				);
				break;
			case ( 0x30f4 === charCode ):
				charArray.push( 0xff73, 0xFF9E );
				break;
			default:
				charArray.push( charCode );
				break;
		}
	}
	return String.fromCharCode.apply( null, charArray );
}

export const toHalfWidth = (value: string) => {
  const firstConvert = toHalfwidthKana(value);
  const secondConvert = toAscii(firstConvert);
  return secondConvert;
}