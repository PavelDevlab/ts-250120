import { savePersistance } from "./functions";

class Account {
    @savePersistance
    public firstName: string;
}

const account = new Account();


account.firstName = 'Vlad';



