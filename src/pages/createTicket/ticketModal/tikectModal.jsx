import React,{useState} from 'react'
import './ticketModall.css';
import { Modal } from 'react-bootstrap';
import { FaTimes , FaChevronLeft , FaChevronRight , FaSearch } from 'react-icons/fa';
import ButtonComponent from '../../../components/button/buttonComponent';
import { services , categories , subCategories } from '../../../components/AppData/AppData';


const TikectModal = ({ onHide , getClassification , ...props }) => {

    const [selectService,setSelectService] = useState('');
    const [selectCategory,setSelectCategory] = useState('');
    const [selectSubCategory,setSelectSubCategory] = useState('');

    const [selection,setSelection] = useState(false);
    const [selectionCategory,setSelectionCategory] = useState(false);
    const [selectionSubCategory,setSelectionSubCategory] = useState(false);

    const [goToCategory,setGoToCategory] = useState(false);
    const [goToSubCategory,setGoToSubCategory] = useState(false);


    const chooseService = (value) => {
      setSelectService(value);
      setSelection(true);
    }

    const chooseCategory = (value) => {
      setSelectCategory(value);
      setSelectionCategory(true);
      setGoToSubCategory(true);
    }

    const chooseSubCategory = (value) => {
      setSelectSubCategory(value);
      setSelectionSubCategory(true);
    }

    const goServices = () => {

      if(goToCategory === true){
        setGoToCategory(false);
        setSelectCategory('');
        setSelectionCategory(false);
        setGoToSubCategory(false);
      }

      if(goToCategory === true && selectionCategory === true){
        setGoToCategory(false);
        setSelectCategory('');
        setGoToSubCategory(false);
        setSelection(false);
      }

      if(goToSubCategory === true){
        setGoToSubCategory(false);
        setSelectSubCategory('');
        setSelectionSubCategory(false);
        setGoToCategory(true);
      }

    }
    
    const goCategory = () => {

        if(selection === true){
          setGoToCategory(true);
        }
        
        if(goToSubCategory === true){
          setGoToCategory(false);
          console.log(goToSubCategory)
        }
      
    }

    const doneAll = () => {
      
      if(selection === true && selectionCategory === true && selectionSubCategory === true){
        getClassification({selectService,selectCategory,selectSubCategory});
        onHide();
      }

    }

    let content;

    if(selection === true && goToCategory === true){
      content = <>
                  {
                    categories.map(cat => (
                      <div
                      className="col-12 col-sm-12 col-lg-6 col-xl-6 col-md-12 mt-3 catagories-data"
                      key={cat.id}
                      onClick={() => chooseCategory(cat.value)}
                      >
                        <div className="text-center categories">
                          <span className="category">
                            {cat.value}
                          </span>
                        </div>
                      </div>
                    ))
                  }
              </>
    }

    else if( selection === true && selectionCategory === true && goToSubCategory === true ){
      content = <>
                  {
                    subCategories.map(sub => (
                      <div
                      className="col-12 col-sm-12 col-lg-6 col-xl-6 col-md-12 mt-3 sub-catagories-data"
                      key={sub.id}
                      onClick={() => chooseSubCategory(sub.value)}
                      >
                        <div className="text-center categories">
                          <span className="category">
                            {sub.value}
                          </span>
                        </div>
                      </div>
                    ))
                  }
                </>
    }
    else{
      content = <>
                  {
                    services.map(ser => (
                        <div className="col-12 col-sm-12 col-lg-3 col-xl-2 col-md-5 text-center mt-5 service" 
                         key={ser.id} 
                         onClick={() => chooseService(ser.value)}>
                          <div className="d-flex flex-column">
                            <span className="services-icons">{ser.icon}</span><br />
                            <span className="mt-3 value">{ser.value}</span>
                          </div>
                        </div>
                    ))
                  }
                </>
    }

    
    return (
        <Modal
          {...props}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >
          <Modal.Header className="modal-Header ticket-modal-Header">
            <Modal.Title id="">
              
              <div className="d-flex pl-5 pr-5 mt-3 mb-0" id="top-heading-ticket-Modal">
              
                <span className={selection ? 'selected' : null}>Services /</span>
                <span className={selection && selectionCategory ? 'selected' : null}>Category /</span>
                <span className={selection && selectionCategory && selectionSubCategory ? 'selected' : null}>SubCategory</span>
                <p id="select-required">Select your required service</p>
              
                <FaTimes className="cross-icon" onClick={onHide} />
                
                <ButtonComponent 
                 className={selectionSubCategory ? 'show-btn btn btn-sm' : 'hide-btn'}
                 title="done" 
                 isset="false" 
                 onClick={() => doneAll()}
                 />
              
              </div>

            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <div className="row pl-5 pr-5" id="modal-content-classification">
              
              <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 mb-4">
                
                <span className={selection ? 'selected' : null}>{selection ? selectService : null} / </span>
                
                <span className={selection && selectionCategory ? 'selected' : null}>
                  {selection && selectionCategory ? selectCategory : null} / </span>
                
                <span className={selection && selectionCategory && selectionSubCategory ? 'selected' : null}>
                  {selection && selectionCategory && selectionSubCategory ? selectSubCategory : null} </span>  
              
              </div>
              
              <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 mb-4" id="search-field">
                <input type="text" placeholder="Search Classification Here..." />
                <FaSearch className="search-icon" />
              </div>
            
            </div>

            <div className="row pl-5 pr-5" id="modal-content-classification-data">

                {content}          
              
            </div>

          </Modal.Body>
          
          <div className="d-flex justify-content-center pb-4 mt-4">
              
              <FaChevronLeft 
               className={(selection && goToCategory) || goToSubCategory ? 'right' : 'move-icons'}
               onClick={ () => goServices() }
              />
              
              <FaChevronRight 
               className={( selection && !selectionSubCategory ) ? 'right' : 'move-icons'}
               onClick={() => goCategory()}
              />
          
          </div>
          
        </Modal>
      );
}

export default TikectModal;
