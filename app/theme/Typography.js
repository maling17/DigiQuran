/**
 * Typography:
 * This contains all the typography config for the application
 * #Note: color and font size are defaulted as they can be overridden
 *        as required.
 */

const Typography = {
    Heading: {
        bold: {
            fontSize: 18,
            fontWeight:'bold',
            fontFamily:'Barlow-Regular'
        },
    },
    Header: {
            fontSize: 20,
          
            fontFamily:'Barlow-Regular'
    },
    Body: {
        primary: {
            fontFamily: 'Roboto',
            color: '#343434'
        },
        regular: {
            fontSize: 14,
            fontWeight: 'normal',
            fontFamily: 'Barlow-Regular'
        },
    },
    Caption: {
        thin: {
            fontSize: 12,
            fontFamily: 'Roboto',
            color: '#000'
        }
    },
    Quran: {
        text:  {
            fontSize: 30,
            fontFamily: 'Arabic Typesetting',
            color: '#333'
        },
        numberWrapper: {
            position: 'absolute',
            width: 'auto',
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        number:  {
            fontFamily: 'Arabic Typesetting',
            color: '#333',
            fontSize: 16,
            fontWeight:'bold',
        }
    }
};

export default Typography;
