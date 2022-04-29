module.exports = {
    purge: false,
    theme: {
        screens: {
            'xs' : '320px',
            'sm' : '360px',
            'md': '850px',
        },
        extend: {
            colors : {
                /*DevZeppelin*/
                primary : '#0D0D0D',
                secundary: '#222224',
                yellow: '#F5D244', 
                gray: '#545454',
                lightGray: '#D9D4D0',
                darkGray: '#333',
                lowContrast: '#EBDF7B',

                /*BLOG*/
                primaryBlog : '#0e364e',
                secundaryBlog: '#13a89e',
                lowContrastBlog: '#117F77' ,
                backgroundBlog: '#d6d4d4',
                backgroundSecundaryBlog: '#608b9b'               
                
            },
            fontFamily : {
                body : ['Heebo'],
                /*'righteous' : ['Righteous']*/
            },
            backgroundImage: theme => ({               
                'hero-big': "url('/01.webp')",  
                'hero-bigger': "url('/bgImage.webp')",  
                'hero-pages': "url('/bgPages.webp')"                         
               })
        },
        grayscale: {
            100: '100%',
        },
        grayscale: ['hover']
    },
    
    variants: {
       
        borderColor: ["hover", "focus"],
        borderStyle: ['hover', 'focus'], 
          
    },
    plugins: []
}