import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"


const App = () => {

  const users = [
    {img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
    intro:'',
    color:'blue',
    tag:'Satisfied'
    },
    {img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735',
    intro:'',
    color:'green',
    tag:'Underserved'
    },
    {img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
    intro:'',
    color:'red',
    tag:'Underbanked'
    },
    {img:'https://images.unsplash.com/photo-1702047129200-89734f555f38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      intro:'',
      color:'pink',
      tag:'underprocess'
    },
    {img:'https://images.unsplash.com/photo-1730343464372-77500ccd307a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      itro:'',
      color:'black',
      tag:'Underdeveloping'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}
export default App