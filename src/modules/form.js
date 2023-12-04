const form = ()=>{
    return `
    <div class="formHeader">
        <h5>Add A Product</h5>
    </div>
    <div class="formBody">
        <div class = "form-group">
            <input type="text" class="form-control productname" placeholder="Product Name">
        </div>
        <div class = "form-group">
            <input type="text" class="form-control productPrice" placeholder="Product Price">
        </div>
        <div class = "form-group">
            <input type="text" class="form-control productYear" list="places" placeholder="Year">
        </div>
        <div class = "form-group">
            <button type="button" class="btn btn-primary load-button col-12" onclick="getFullProductData()">Save</button>
        </div>
    </div>
    
    `
}
export default form;