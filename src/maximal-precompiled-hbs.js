import Handlebars from "handlebars";

var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['maximal-precompiled'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Order Number: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"orderNumber") || (depth0 != null ? lookupProperty(depth0,"orderNumber") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"orderNumber","hash":{},"data":data,"loc":{"start":{"line":8,"column":33},"end":{"line":8,"column":48}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "- "
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":11,"column":10}}}) : helper)))
    + ": "
    + alias4(((helper = (helper = lookupProperty(helpers,"hours") || (depth0 != null ? lookupProperty(depth0,"hours") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hours","hash":{},"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":21}}}) : helper)))
    + "h - "
    + alias4(((helper = (helper = lookupProperty(helpers,"activity") || (depth0 != null ? lookupProperty(depth0,"activity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"activity","hash":{},"data":data,"loc":{"start":{"line":11,"column":25},"end":{"line":11,"column":37}}}) : helper)))
    + "\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Discount: -€"
    + alias4(((helper = (helper = lookupProperty(helpers,"discountAmount") || (depth0 != null ? lookupProperty(depth0,"discountAmount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"discountAmount","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":30}}}) : helper)))
    + " ("
    + alias4(((helper = (helper = lookupProperty(helpers,"discountDescription") || (depth0 != null ? lookupProperty(depth0,"discountDescription") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"discountDescription","hash":{},"data":data,"loc":{"start":{"line":19,"column":32},"end":{"line":19,"column":55}}}) : helper)))
    + ")\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Note: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"notes") || (depth0 != null ? lookupProperty(depth0,"notes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"notes","hash":{},"data":data,"loc":{"start":{"line":27,"column":6},"end":{"line":27,"column":15}}}) : helper)))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "Hello "
    + alias4(((helper = (helper = lookupProperty(helpers,"clientName") || (depth0 != null ? lookupProperty(depth0,"clientName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"clientName","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":20}}}) : helper)))
    + ",\r\n\r\nPlease find below the summary for project **"
    + alias4(((helper = (helper = lookupProperty(helpers,"projectName") || (depth0 != null ? lookupProperty(depth0,"projectName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectName","hash":{},"data":data,"loc":{"start":{"line":3,"column":44},"end":{"line":3,"column":59}}}) : helper)))
    + "** for the month of "
    + alias4(((helper = (helper = lookupProperty(helpers,"projectMonth") || (depth0 != null ? lookupProperty(depth0,"projectMonth") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"projectMonth","hash":{},"data":data,"loc":{"start":{"line":3,"column":79},"end":{"line":3,"column":95}}}) : helper)))
    + ".\r\n\r\nConsultant: "
    + alias4(((helper = (helper = lookupProperty(helpers,"consultantName") || (depth0 != null ? lookupProperty(depth0,"consultantName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"consultantName","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":30}}}) : helper)))
    + "\r\nBilling Period: "
    + alias4(((helper = (helper = lookupProperty(helpers,"billingPeriodStart") || (depth0 != null ? lookupProperty(depth0,"billingPeriodStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"billingPeriodStart","hash":{},"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":6,"column":38}}}) : helper)))
    + " - "
    + alias4(((helper = (helper = lookupProperty(helpers,"billingPeriodEnd") || (depth0 != null ? lookupProperty(depth0,"billingPeriodEnd") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"billingPeriodEnd","hash":{},"data":data,"loc":{"start":{"line":6,"column":41},"end":{"line":6,"column":61}}}) : helper)))
    + "\r\nInvoice Number: "
    + alias4(((helper = (helper = lookupProperty(helpers,"invoiceNumber") || (depth0 != null ? lookupProperty(depth0,"invoiceNumber") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"invoiceNumber","hash":{},"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":7,"column":33}}}) : helper)))
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"orderNumber") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":8,"column":55}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"days") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
    + "\r\nTotal hours: "
    + alias4(((helper = (helper = lookupProperty(helpers,"totalHours") || (depth0 != null ? lookupProperty(depth0,"totalHours") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalHours","hash":{},"data":data,"loc":{"start":{"line":14,"column":13},"end":{"line":14,"column":27}}}) : helper)))
    + "\r\nHourly Rate: €"
    + alias4(((helper = (helper = lookupProperty(helpers,"hourlyRate") || (depth0 != null ? lookupProperty(depth0,"hourlyRate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hourlyRate","hash":{},"data":data,"loc":{"start":{"line":15,"column":14},"end":{"line":15,"column":28}}}) : helper)))
    + "\r\nSubtotal: €"
    + alias4(((helper = (helper = lookupProperty(helpers,"subtotal") || (depth0 != null ? lookupProperty(depth0,"subtotal") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subtotal","hash":{},"data":data,"loc":{"start":{"line":16,"column":11},"end":{"line":16,"column":23}}}) : helper)))
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"discount") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":0},"end":{"line":20,"column":7}}})) != null ? stack1 : "")
    + "\r\nTotal (excl. VAT): €"
    + alias4(((helper = (helper = lookupProperty(helpers,"totalExclVat") || (depth0 != null ? lookupProperty(depth0,"totalExclVat") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalExclVat","hash":{},"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":22,"column":36}}}) : helper)))
    + "\r\nVAT ("
    + alias4(((helper = (helper = lookupProperty(helpers,"vatRate") || (depth0 != null ? lookupProperty(depth0,"vatRate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vatRate","hash":{},"data":data,"loc":{"start":{"line":23,"column":5},"end":{"line":23,"column":16}}}) : helper)))
    + "%): €"
    + alias4(((helper = (helper = lookupProperty(helpers,"vatAmount") || (depth0 != null ? lookupProperty(depth0,"vatAmount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vatAmount","hash":{},"data":data,"loc":{"start":{"line":23,"column":21},"end":{"line":23,"column":34}}}) : helper)))
    + "\r\n**Grand Total: €"
    + alias4(((helper = (helper = lookupProperty(helpers,"totalInclVat") || (depth0 != null ? lookupProperty(depth0,"totalInclVat") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalInclVat","hash":{},"data":data,"loc":{"start":{"line":24,"column":16},"end":{"line":24,"column":32}}}) : helper)))
    + "**\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"notes") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":0},"end":{"line":28,"column":7}}})) != null ? stack1 : "")
    + "\r\nThe signed timesheet is attached to this message.\r\n\r\nKind regards,\r\nThe "
    + alias4(((helper = (helper = lookupProperty(helpers,"companyName") || (depth0 != null ? lookupProperty(depth0,"companyName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"companyName","hash":{},"data":data,"loc":{"start":{"line":33,"column":4},"end":{"line":33,"column":19}}}) : helper)))
    + " team\r\n";
},"useData":true});
