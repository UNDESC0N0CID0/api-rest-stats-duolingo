import { Router } from 'express';

class TestRoutes{
    
    public router: Router = Router();
    
    constructor(){
        this.config();
    }
    
    config():void{
        
    }
}
const testRoute = new TestRoutes();
export default testRoute.router;