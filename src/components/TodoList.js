import React , {useState} from 'react'
// import './App.css';
import {Button , Form,Table, Row , CloseButton} from 'react-bootstrap';
// import { isAccordionItemSelected } from 'react-bootstrap/esm/AccordionContext';
import List from '../List';

function TodoList() {


    const[item,setItem] = useState({title:"",description:"",date:""});

//  const [description , setDescription] =useState("")
    const [newitem , setNewitem] = useState([]);

    const [isEdititem, setIsEditItem] = useState(null);

    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [Submit, setSubmit] = useState(false);

    const addItem =() =>{
        if(item.title === "" || item.description === "" || item.date === ""){
            alert("please add data")
            
        }else if(item && !toggleSubmit){

            setNewitem(
                newitem.map((e) =>
            {
                    if(e.id === isEdititem){
                        return {...e, title:item.title , description:item.description, date: item.date}
                        
                    }
                    console.log("ediitted");
                    return e;
            })
            )
    
        
        // setItem({title:"",description:"",date:""})
        }else{
        setNewitem([...newitem,item]);
        setItem({title:"",description:"",date:""})
        setSubmit(true)
    }


    }

     const modifyItem = (id) =>{
                let newEditItem = newitem.find((e) =>{
                    return e.id === id;
                });


console.log(newEditItem);
                setToggleSubmit(false); 
                setItem(newEditItem);
                setIsEditItem(id);
                setSubmit(true)
                // console.log(" new object")




     } 

    const deleteItem =(id) =>{
        // console.log(id)
        const deleteData = newitem.filter((y,i) => {
                    return i !== id; 
        }) 

        setNewitem(deleteData);
        setSubmit(true)

    }

    const removeAll =() =>{
         setNewitem([]);
    }



    return (

<div  style={{ backgroundImage: "url('./images/back1.jpg')",}}>  


            <div className='container'>
         
                <Row>
                    <div className='col-sm-6 mt-5 py-5 from1'> 
            <Form className='shadow-pop p-5 mb-5 rounded bg-dark form1'>
                {/* <h1 className="text-center mb-4"> TodoList</h1>/ */}
                <Row className=' shadow p-3 mb-4 bg-warning rounded'> 
                <div className="col-sm-4">
                <img src="/images/icon.png" alt='Todo List' className=" mr-4 p"  />
                </div>
                <div className='col-sm-6 text-dark'>
                    <h2 className='mt-2 px-1'>ToDo List</h2>
                </div>
                <div className="col-sm-2">
                <img src="/images/icon.png" alt='Todo List' className="  ml-6 px-1"  />
                </div>
                </Row>

                <Form.Group className="  align-center " >
                <div class="input-group  bg-dark mb-3">
             <span class="input-group-text">Item :</span>
             <Form.Control type="text" value={item.title} className="input bg-dark text-light"  required="required" onChange={(e) => setItem({...item,title:e.target.value})} placeholder="Add New Item" />
             </div>
             <div class="input-group mb-3">
             <span class="input-group-text ">Description :</span>
             <Form.Control type="text" value={item.description} className="input-warning bg-dark text-light border border-warning"  onChange={(e) => {setItem({...item,description:e.target.value})}}placeholder="Add Description" />
           </div>
             <div class="input-group mb-3">
             <span class="input-group-text">Date :</span>
        
             <Form.Control type="date" value={item.date} className="input bg-dark text-light" onChange={(e) => {setItem({...item,date:e.target.value})}}placeholder=" Enter Date" />
              </div>
                </Form.Group>
            
                {
                    toggleSubmit ?
                <Button  type="button" variant="primary" onClick={addItem} >Add Item</Button>  :
                 <Button  type="button"variant="success" onClick={addItem} >Update Item</Button>
                }

                    
                {/* <Button type="button" className='btn-success' onClick={listItem}>Add Item</Button> <hr/>   */}
                {/* <Button type="button" className='btn-danger' onClick={listItem}>Add Item</Button> */}

                
            </Form>
            </div>
            {/* <i className="far fa-edit add-btn"></i> */}

            <div className='col-sm-6  mt-5 py-5'> 
    
                {/* <div className='col-sm-6'>

                </div> */}
             

               
                {/* <div className="bg-light p-3"> */}
                 {/* <CloseButton variant="white" /> */}
                     {/* <CloseButton variant="white" disabled /> */}
                        {/* </div> */}
                {/* <Button className=' btn-danger ' onClick={removeAll}>X</Button> */}

            { Submit ?
                < div className='col-sm-12 d-flex flex-row-reverse form1 bg-warning   ' >
                 
<CloseButton className='btn-close-dark mt-1 p-1'  onClick={removeAll}/>
 </div> : null

            
            }
            <Table className="shadow-pop p-2 mb-2 bg-dark rounded form1 border-0 " >
  {/* <thead>
    <tr>
      <th>title</th>
      <th>description</th>
      <th>date</th>
      <th>action</th>
      <th>action</th>
    </tr>
  </thead> */}
  <tbody>
      {newitem.map((e,i) => {
          return(
        
            <tr key={i}>
            <td  className='bg-dark text-white' > * </td>
            <td className='bg-dark text-white' >{e.title}</td>
            <td className='bg-dark text-white'>{e.description}</td>
            <td className='bg-dark text-white'>{e.date}</td>
            <td  className='bg-dark text-white'><Button type="button" className='btn-success' onClick={() => modifyItem(e.i)}>modify</Button></td>
            <td className='bg-dark text-white'><Button type="button" className='btn-danger' onClick={() => deleteItem(i)}>delete</Button></td>
          </tr>
        

          )
      })}
   
    
  </tbody>
</Table>
           
               
              {/* {  item.map((val, index) => {
                    return  <List key={index} />
                })
            }    */}
                </div>
                </Row>
            </div>
            </div>


    )
}

export default TodoList
