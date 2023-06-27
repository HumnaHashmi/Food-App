import React from 'react'
import Helmet from './Helmet'
import Card from './Card'
import Fdata from './Fdata'
import Cdata from './Cdata'
import Card2 from './Card2'
import Carousel from './Carousel'


function Home() {

  return (
    <>
      <Helmet title={'Home'}></Helmet>
      <Carousel />
      <h1 style={{
        textAlign:"center",
        fontSize:'45px',
        marginBottom:"10px",
        marginTop:"10px",
        fontWeight:'bold'
      }}>
      Food</h1>
  
      <div
      style={{
        display:'flex',
        flexWrap: 'wrap',
        marginLeft:"55px"       
      }}
      >{
        
                Fdata.map((val,ind)=>{
                    return <Card key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    />
                })
            }
       
</div>



{/* Categoreis */}
<h1 style={{
        textAlign:"center",
        fontSize:'45px',
        marginBottom:"10px",
        marginTop:"10px",
        fontWeight:'bold'
      }}>
     Categories </h1>
<div
      style={{
        display:'flex',
        flexWrap: 'wrap',
        alignItems:"center",
        marginLeft:"120px"       
      }}
      >{
        
                Cdata.map((val,ind)=>{
                    return <Card2 key={ind}
                    image={val.image} 
                    title2={val.title2}
                    />
                })
            }
       
</div>

    </>
    )
}

export default Home