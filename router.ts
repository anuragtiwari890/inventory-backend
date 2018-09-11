import {InventoryRepository} from './repositories/inventory-repository';
import {Inventory, InventoryFactory} from "./entities/inventory";
import {SaveEntityIntent} from "./intents/save-entity-intent";
import {FetchUnapprovedInventoriesIntent} from './intents/fetch-unapproved-inventories-intent';
import {ConfigImpl} from './config';
import {Product, ProductFactory} from './entities/product';
import {ProductRepository} from './repositories/product-repository';
import {MySqlConnectionPool} from './utils/mysql-connection-pool';
import {ProductTypeRepository} from './repositories/product-type-repository';
import {ProductType, ProductTypeFactory} from './entities/product-type';
import {EntitiesFactory} from "./entities/entity";
import {FetchAllEntitiesIntent} from "./intents/fetch-all-entities-intent";
import {BatchRepository} from "./repositories/batch-repositories";
import {BatchFactory, Batch} from "./entities/batch";
import {VendorRepository} from "./repositories/vender-repository";
import {VendorFactory, Vendor} from "./entities/Vendor";

var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();
app.use(session({
    secret: "mysessionsecret",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));

app.use(bodyParser.json({type: 'application/json'}))
app.use(bodyParser.urlencoded({extended: true}));

let mySqlConnectionPool: MySqlConnectionPool = new MySqlConnectionPool();
let inventoryRepository: InventoryRepository = new InventoryRepository(mySqlConnectionPool);
let productRepository: ProductRepository = new ProductRepository(mySqlConnectionPool);

let productTypeRepository: ProductTypeRepository = new ProductTypeRepository(mySqlConnectionPool);
let batchRepository: BatchRepository = new BatchRepository(mySqlConnectionPool);
let vendorRepository: VendorRepository = new VendorRepository(mySqlConnectionPool);
let config = new ConfigImpl();

app.get('/', function(req: any, res: any) {
    if (authenticateSession(req)) {
        res.redirect(config.ClientBaseURL + "/admin");
    }
    else {
        res.redirect(config.ClientBaseURL + "/index.html");
    }
});

app.post("/product-type", function(req: any, res: any) {
    if (authenticateSession(req)) {
        new SaveEntityIntent(productTypeRepository).impl(
            req.body,
            new EntitiesFactory(new ProductTypeFactory()),
            (products: ProductType[]) => {
                res.status(200).send(products);
            },
            (err: Error) => {
                res.status(400).send("error occured");
            }
        )
    } else {
        res.redirect(config.ClientBaseURL + "/index.html");
    }
});

app.get("/product-type", function(req: any, res: any) {
    if (authenticateSession(req)) {
        new FetchAllEntitiesIntent(productTypeRepository).impl(
            (productsType: ProductType[]) => {
                res.status(200).send(productsType);
            },
            (err: Error) => {
                console.error("error is -> ", err)
                res.status(400).send("error occured");
            }
        );
    }
    else {
        res.redirect(config.ClientBaseURL + "/index.html");
    }
});

app.post("/batch", function(req: any, res: any) {
    if (authenticateSession(req)) {
        new SaveEntityIntent(batchRepository).impl(
            req.body,
            new EntitiesFactory(new BatchFactory()),
            (products: Batch[]) => {
                res.status(200).send(products);
            },
            (err: Error) => {
                res.status(400).send("error occured");
            }
        )
    } else {
        res.redirect(config.ClientBaseURL + "/index.html");
    }
});

app.get("/batch", function(req: any, res: any) {
    if (authenticateSession(req)) {
        new FetchAllEntitiesIntent(batchRepository).impl(
            (productsType: Batch[]) => {
                res.status(200).send(productsType);
            },
            (err: Error) => {
                console.error("error is -> ", err)
                res.status(400).send("error occured");
            }
        );
    }
    else {
        res.redirect(config.ClientBaseURL + "/index.html");
    }
});

app.post("/vendor", function(req: any, res: any) {
    if (authenticateSession(req)) {
        new SaveEntityIntent(vendorRepository).impl(
            req.body,
            new EntitiesFactory(new VendorFactory()),
            (vendors: Vendor[]) => {
                res.status(200).send(vendors);
            },
            (err: Error) => {
                res.status(400).send("error occured");
            }
        )
    } else {
        res.redirect(config.ClientBaseURL + "/index.html");
    }
});

app.get("/vendor", function(req: any, res: any) {
    if (authenticateSession(req)) {
        new FetchAllEntitiesIntent(vendorRepository).impl(
            (vendors: Vendor[]) => {
                res.status(200).send(vendors);
            },
            (err: Error) => {
                console.error("error is -> ", err)
                res.status(400).send("error occured");
            }
        );
    }
    else {
        res.redirect(config.ClientBaseURL + "/index.html");
    }
});

app.post("/product", function(req: any, res: any) {
    if (authenticateSession(req)) {
        new SaveEntityIntent(productRepository).impl(
            req.body,
            new EntitiesFactory(new ProductFactory()),
            (products: Product[]) => {
                res.status(200).send(products);
            },
            (err: Error) => {
                res.status(400).send("error occured");
            }
        )
    } else {
        res.redirect(config.ClientBaseURL + "/index.html");
    }
});

app.get("/product", function(req: any, res: any) {
    if (authenticateSession(req)) {
        new FetchAllEntitiesIntent(productRepository).impl(
            (products: Product[]) => {
                res.status(200).send(products);
            },
            (err: Error) => {
                console.error("error is -> ", err)
                res.status(400).send("error occured");
            }
        );
    }
    else {
        res.redirect(config.ClientBaseURL + "/index.html");
    }
});

app.post("/inventories", function(req: any, res: any) {
    if (authenticateSession(req)) {
        new SaveEntityIntent(inventoryRepository).impl(
            req.body,
            new EntitiesFactory(new InventoryFactory()),
            (inventories: Inventory[]) => {
                res.status(200).send(inventories);
            },
            (err: Error) => {
                res.status(400).send("error occured");
            }
        )
    } else {
        res.redirect(config.ClientBaseURL + "/index.html");
    }
});

app.get("/inventories", function(req: any, res: any) {
    if (authenticateSession(req)) {
        new FetchAllEntitiesIntent(inventoryRepository).impl(
            (inventories: Inventory[]) => {
                res.status(200).send(inventories);
            },
            (err: Error) => {
                console.error("error is -> ", err)
                res.status(400).send("error occured");
            }
        );
    }
    else {
        res.redirect(config.ClientBaseURL + "/index.html");
    }
});

app.get("/unapproved-inventories", function(req: any, res: any) {
    if (authenticateSession(req)) {
        new FetchUnapprovedInventoriesIntent(inventoryRepository).impl(
            (inventories: Inventory[]) => {
                res.status(200).send(inventories);
            },
            (err: Error) => {
                res.status(400).send("error occured");
            }
        )
    }
    else {
        res.redirect(config.ClientBaseURL + "/index.html");
    }
});

// app.post("/login", function(req: any, res: any) {

// });

function authenticateSession(req: any): boolean {
    // return req.session.email ? true : false;
    return true;
}

let server = app.listen(config.serverPort, () => {
    console.log("Inventory-API: live on port ", config.serverPort);
});