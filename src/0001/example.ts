Object.defineProperty(window, "MySweetApp", {value: "v1.0.0", writable: true});

function deliveryMethod() {
    // TODO
    return "overnight";
}

function shipWeight() {
    const el = document.getElementById('weight');
    if(!el){
        return 0;
    }
    return parseInt(el.innerHTML, 10);
}

function sendUpdates(emailAddr: string | string[]) {
    function sendEmail(addr: string) {
        // tslint:disable-next-line:no-console
        console.log(`Shipping to ${addr} via ${deliveryMethod() || "standard"} delivery`);

        if (shipWeight() > 100) {
            // tslint:disable-next-line:no-console
            console.log("WARNING: Oversize package");
        }
    }

    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}

