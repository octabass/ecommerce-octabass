const products = [
    {id: 1, category:'4-cuerdas', name: 'Fender Jazz Bass', price: 1500, stock: 8, modelo: 'American Standard' , description: '4 Cuerdas', imageUrl: 'https://bairesrocks.vteximg.com.br/arquivos/ids/203418-700-700/975114-MLA32328535076_092019-F.jpg?v=637313064991900000'},
    {id: 2, category:'5-cuerdas', name: 'Fender Jazz Bass V', price: 3000, stock: 4, modelo: 'Elite', description: '5 Cuerdas', imageUrl: 'https://images.musicstore.de/images/1280/fender-american-elite-jazz-bass-v-rw-3-colour-sunburst-_1_BAS0008341-000.jpg'},
    {id: 3, category:'6-cuerdas', name: 'Ibanez', price: 2500, stock: 3, modelo: 'Gsr 206', description: '6 Cuerdas', imageUrl: 'https://www.inovamusicnet.com/wp-content/uploads/2021/04/41qeWRNzfBL._AC_US800_.jpg'},
    {id: 4, category:'fretless', name: 'Fender AS', price: 1700, stock: 4, modelo: 'Fretless', description: 'Jaco Pastorius Signature', imageUrl: 'https://images.musicstore.de/images/0960/fender-as-jaco-pastorius-j-bass-fl-rw-3-color-sunburst_1_BAS0000356-000.jpg'},
    {id: 5, category:'amps', name: 'Mark Bass', price: 2000, stock: 5, modelo: 'CMD 102P', description: '2x10 - 500w', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_156711-MLA20615662817_032016-O.webp'},
    {id: 6, category:'acc', name: 'Cable Plug', price: 50, stock: 21, modelo: 'NEON', description: '3 metros - Plug Angular/Plug', imageUrl: 'https://bairesrocks.vteximg.com.br/arquivos/ids/225799/D_NQ_NP_775800-MLA44251397245_122020-O.jpg?v=637566182868500000'}
]

export const mFetch  = (pid) =>  new Promise((res,rej) => {

    setTimeout(()=>{
        res(pid ? products.find(product => product.id === pid) : products)
    }, 1000)
})