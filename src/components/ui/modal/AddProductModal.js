import "./css/AddProductModal.css";



export const AddProductModal = ({ addProductModal, setAddProductModal }) => {
  return (
    <>
      <div onClick={() => setAddProductModal(false)} className={`addproductmodal-backdrop ${addProductModal ? "" : "addproductmodal-backdrop-hide"} position-fixed w-100 h-100 top-0 start-0 bottom-0 end-0`}></div>

      <div className={`addproductmodal ${addProductModal ? "" : "addProductModal-hide"} bg-white position-fixed top-50 start-50 translate-middle rounded-2`}>
        <div className="addproductmodal-header p-4 d-flex align-items-center justify-content-between">
          <h5 className="mb-0">Update Product - Garrett Winters</h5>

          <i onClick={() => setAddProductModal(false)} className="bi bi-x-lg"></i>
        </div>

        <div className="addproductmodal-body p-4">
          <form className="bg-white pt-2 rounded-2">
            <div className="products-form row">
              <div className="col-lg-4 mb-4">
                <label htmlFor="" className="form-label">Product Name</label>

                <input type="text" className="form-control" placeholder="Product name" />
              </div>

              <div className="col-lg-4 mb-4">
                <label htmlFor="" className="form-label">Product Price</label>

                <input type="number" className="form-control" placeholder="Product price" />
              </div>

              <div className="col-lg-4 mb-4">
                <label htmlFor="" className="form-label">Product Discount (%)</label>

                <input type="number" className="form-control" placeholder="Product discount" />
              </div>

              <div className="col-lg-6 mb-4">
                <label htmlFor="" className="form-label">Product Featured Image</label>

                <input type="file" />
              </div>

              <div className="col-lg-6 mb-4">
                <label htmlFor="" className="form-label">Product Small Images</label>

                <input type="file" />
              </div>

              <div className="col-lg-4 mb-4">
                <label htmlFor="" className="form-label">Featured Product</label>

                <div className="deowhirwerwe">
                  <div className="checkbox-wrapper-59">
                    <label className="switch">
                      <input type="checkbox" />

                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <label htmlFor="" className="form-label">Best Seller</label>

                <div className="deowhirwerwe">
                  <div className="checkbox-wrapper-59">
                    <label className="switch">
                      <input type="checkbox" />

                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 mb-4">
                <label htmlFor="" className="form-label">Product Description</label>

                <textarea name="" className="form-control" placeholder="Type product description here" id=""></textarea>
              </div>

              <div className="d-flex justify-content-center">
                <div className="col-lg-2">
                  <button className="btn btn-primary w-100 mt-4">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}