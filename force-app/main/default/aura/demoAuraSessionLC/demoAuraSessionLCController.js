({
	init : function(component, event, helper) {
		console.log(">> Inside init method");
	},
    changeMessage : function(component, event, helper) {
	   var whichOne = event.getSource().getLocalId();
       console.log('--button 1 ---'+whichOne);
       helper.setMessage(component,"Aura Session",whichOne);
	},
    changeTitle : function(component, event, helper) {
        var whichOne = event.getSource().getLocalId();
        console.log('--button 2 ---'+whichOne);
        helper.setMessage(component,"New Demo Component",whichOne);
    },
    callControllerMethod : function(component, event, helper) {
        var action = component.get("c.fetchAccounts");
       // console.log(action);
        action.setParams({
            "searchKey": component.get("v.searchKey")
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.accountList", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }

})