import RestauranCard from "../RestaurantCard"
//create mock prop and pass it
const mockData={}
it("should render Restaurant componet with props Data",()=>{
    //passing props
    render(<RestauranCard resData={mockData}/>)
})