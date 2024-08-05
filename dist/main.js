"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const hbs = require("hbs");
const session = require("express-session");
const bodyParser = require("body-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    hbs.registerHelper('equals', function (a, b) {
        return a === b;
    });
    app.use(bodyParser.urlencoded({ extended: true }));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    app.use(session({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    }));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    hbs.registerPartials((0, path_1.join)(__dirname, '..', 'views', 'partials'));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map