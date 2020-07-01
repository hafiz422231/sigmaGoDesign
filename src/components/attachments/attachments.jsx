import React , {useState} from 'react'
import './attachments.css';
import { FaPlus } from 'react-icons/fa';

const Attachments = (props) => {
    
    const [attachments , setAttachment] = useState([
        {id: Math.random(), src: '1.jpg' , name: '1.jpg'},{id: Math.random(), src: '2.jpg' , name: '2.jpg'}
    ]);

    const [attachs , setAttachs] = useState([
        {id: Math.random(), src: '1.jpg' , name: '1.jpg'},
        {id: Math.random(), src: '2.jpg' , name: '2.jpg'},
        {id: Math.random(), src: '2.jpg' , name: '2.jpg'}
    ]);

    const selectAttachment = (e) => {
        let name = e.target.files[0].name;
        setAttachment([...attachments.concat({ id: Math.random() ,src: e.target.files[0] , name: e.target.files[0].name })])

        let reader = new FileReader();
        
        reader.onloadend = () => {
            setAttachment([...attachments.concat({ id: Math.random() ,src: reader.result , name: name })])
        }
        
        reader.readAsDataURL( e.target.files[0] , e.target.files[0].name );

    }
    
    return (
        <div className="d-flex" id="attachments">
                                <div className="row pl-3">
                                { props.show ?
                                    <> 
                                        <div className="d-flex flex-column in mr-4">
                                            <label> <FaPlus className="icon" />
                                                <input type="file" size="30" 
                                                accept="image/png, image/jpg, image/jpeg"
                                                onChange={(e) => selectAttachment(e)} />
                                            </label>
                                            <span className="mt-1">Attachment</span>
                                        </div>
                                        {
                                            attachments.map(item => (
                                                <div className={`d-flex flex-column ${props.className} `} key={item.id}>
                                                    <img alt={item.name} src={item.src} />
                                                    { props.imageName && <span>{item.name}</span>}
                                                </div>
                                            ))
                                        }
                                    </>
                                    :
                                    <>
                                        {
                                            attachs.map(item => (
                                                <div className={`d-flex flex-column ${props.className} `} key={item.id}>
                                                    <img alt={item.name} src={item.src} />
                                                    { props.imageName && <span>{item.name}</span>}
                                                </div>
                                            ))
                                        }   
                                    </>
                            }
                                </div>
                            </div>
    )
}

export default Attachments;
