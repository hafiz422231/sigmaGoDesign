import React , {useState , useRef , useEffect} from 'react'
import './createTicket.css';
import RightSideBar from '../../components/rightSideBar/rightSideBar';
import ButtonComponent from '../../components/button/buttonComponent';
import TikectModal from './ticketModal/tikectModal';
import Attachments from '../../components/attachments/attachments';


const CreateTicket = () => {

    const textTitle = useRef(null)
    const [showClassifications,setShowClassifications] = useState(false);
    const [classificationsValues,setClassificationsValues] = useState('');
    const [valuesStatus,setValuesStatus] = useState(false);

    
    useEffect(() => {
        textTitle.current.focus();
    }, []);


    const gettingValues = (values) => {
        setClassificationsValues(values);
        setValuesStatus(true);
    }

    return (
        <div id="main-wrapper-create-ticket">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-12 col-lg-8 col-md-12 col-xl-8 card-left">

                        <div className="box-shadow">
                            
                            <h6>Classifications</h6>

                            <div className="">
                                
                                <div className="row">
                                    
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-6">
                                    
                                    <ButtonComponent 
                                        title="Please Select Service, Category and SubCategory"
                                        className="selection-btn"
                                        type="button"
                                        onClick={() => setShowClassifications(true)}
                                        />
                                    
                                    </div>
                                    
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-6">
                                        <div id="classifications-values">
                                            <span>{valuesStatus ? classificationsValues.selectService : 'Service'} /
                                            {valuesStatus ? classificationsValues.selectCategory : 'Category'} /
                                            {valuesStatus ? classificationsValues.selectSubCategory : 'SubCategory'}</span>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <TikectModal 
                                 show={showClassifications} 
                                 onHide={() => setShowClassifications(false)}
                                 getClassification={(e) => gettingValues(e)}
                                 />

                            </div>

                            <h6 className="mt-5 mb-2">Title</h6>
                            <input className="text-title" ref={textTitle} 
                             type="text" placeholder="Enter Title Here..." 
                             name="title" id="title" required />
                            
                            <h6>Attachments</h6>
                            <Attachments show={true} imageName={true} className="selectedImages" />
                            
                            <h6>Description</h6>
                            <div className="d-flex justify-content-between create-ticket-textarea">
                                <textarea type="text" placeholder="Enter Description Here...">

                                </textarea>
                                <ButtonComponent title="submit" className="submit" />
                            </div>
                        
                        </div>

                    </div>
                    <div className="col-sm-12 col-12 col-lg-4 col-md-12 col-xl-4 card-right">
                        <RightSideBar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTicket;
