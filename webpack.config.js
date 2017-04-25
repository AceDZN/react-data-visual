module.exports = {
     //oldentry: './source/client.js',
     //mapentry: './source/map-client.js',
     entry: './source/chart-client.js',
     output: {
         path: './',
         filename: 'index.js',
     },
     devServer:{
        inline:true,
        contentBase:'./public',
        port:3000
     },

     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         },
         {
           test: /\.json/,
           loader: 'json-loader'
         },
         {
           test: /\.csv/,
           loader: 'dsv-loader'
         }
       ]
     }
 }
