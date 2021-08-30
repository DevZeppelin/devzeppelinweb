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
                primary : '#0D0D0D',
                secundary: '#222224',
                yellow: '#F5D244',                
                green: '#107300',
                lightgreen: '#E83838',
                gray: '#545454',
                lightGray: '#D9D4D0',
                darkGray: '#333',
                lowContrast: '#64BE3D' ,
                background: '#d6d4d4',
                backgroundSecundary: '#B6E094',
                blue: '#04558A',
                darkBlue: '#043453'
            },
            fontFamily : {
                body : ['Heebo'],
                'righteous' : ['Righteous']
            },
            backgroundImage: theme => ({
                'hero': "url('/01-sm.png')",  
                'hero-big': "url('/01.png')",  
                'hero-bigger': "url('/bgImage.png')",  
                'hero-pages': "url('/bgPages.png')",  
                'hero-welcome1' : "url('/01-welcome.png')" ,             
                'hero-welcome2' : "url('/02-welcome.png')"  ,            
                'hero-welcome3' : "url('/03-welcome.png')"              
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