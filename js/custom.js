const addCustomer = document.querySelector('#addCustomer')
custHeads=['name','initialbalance','address']

const readData = () => {
    return JSON.parse(localStorage.getItem("customers"))
}

const writeData = () => {
     JSON.stringify(localStorage.setItem("customers"))
}


addCustomer.addEventListener('submit',function(e)
{
    e.preventDefault()
    // let customer = {
    //     custName:this.elements.name.value,
    //     custId:this.elements.accountnumber.value,
    //     custBalance:this.elements.initialbalance.value,
    //     custAddress:this.elements.address.value,
    //     }
    let customer = {AccountNumber:Date.now()}
    custHeads.forEach(head => {

        customer[head]=this.elements[head].value
        
    });
    const customers = writeData()
    customers.push(customer)
    console.log(customers)
}
)