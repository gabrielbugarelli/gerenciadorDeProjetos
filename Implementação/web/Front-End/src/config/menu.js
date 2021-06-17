const menu = () =>{

  
  return (
      [
        { label: 'Tela Inicial', icon: 'pi pi-fw pi-home', to: '/' },
        { label: 'Tela Inicial2', icon: 'pi pi-fw pi-home', 
            items:[
                { label: 'teste', icon: 'pi pi-fw pi-home', to:'/teste'}
            ] },
        { label: 'Cadastro Perfil', icon: 'pi pi-fw pi-sitemap', to: '/seguranca/cadastroPerfil' },
    ]
  )
}

export default menu;