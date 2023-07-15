import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
  
  const SearchingBoxModal = ({ props, selectedName, handleNameClick, isOpen, onClose, onClickOutside }) => {
    return (
      <Modal  isOpen={isOpen} onClose={onClose} > {/* Add motionPreset here */}
        <ModalOverlay onClick={onClickOutside} />
        <ModalContent>
          <ModalBody>
            <div data-aos="fade-down" data-aos-duration="400" className="bg-gray-300 rounded-xl flex flex-col border border-gray-300">
              {props.result
                .filter((product) => {
                  const searchTerm = typeof props.value === 'string' ? props.value.toLowerCase() : '';
                  const fullName = product.name.toLowerCase();
                  return fullName.includes(searchTerm);
                })
                .map((product) => (
                  <div
                    className={`cursor-pointer hover:text-red-800 text-left my-2 mx-4 ${
                      product.name === selectedName ? 'text-red-800' : ''
                    }`}
                    key={product.id}
                    onClick={() => handleNameClick(product.name)}
                  >
                    {product.name}
                  </div>
                ))}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  
  export default SearchingBoxModal;
  