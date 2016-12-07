STORE

////////////////////////////////

Store = datastore where products will be stored. No pun intended. -access store by /api/store

newProduct: function that will return the new product in correct format. newProduct takes one parameter, which is the product you are adding to the store. *** products must be wrapped in a "product" property. format -- ///////////////////////////////////// 
id: product.id || uuid.v4(), 
category: product.category, 
name: product.name, 
description: product.description, 
specs: product.specs || [], 
images:[], reviews: product.reviews || '',
 msrp: product.msrp, 
 memberPrice:product.memberPrice, 
 nonMemberPrice:product.nonMemberPrice, 
 inStock: true, 
 inStore: true //////////////////////////////////////////////

addToStore(): adds the new product to the store. -Takes two parameters =>the new product (wrapped in a "product property") -and a callback.

getAll(): will get all products in the store. -No parameters -Only used for http GET request in route.

getProductById(): name is pretty telling. -takes two parameters => product's id and a callback -used in updateProducts() and removeProducts

updateProducts(): guess what this one does?

takes 3 parameters => the product's id, the product (wrapped in a "product" property), and callback
removeProduct(): If I didn't tell you what the previous funciton did, you'll have to guess what this bad boy does too. -takes 2 parameters => product's id and callback -You don't need anything in the body for this one.

MEMBER

//////////////////////////

Membership = datastore where members will be stored. No pun intended. -access store by /api/membership

newMembership: function that will return the new member in correct format. newMember takes one parameter, which is the member you are adding to the Membership data-store. *** member must be wrapped in a "member" property. format -- /////////////////////////////////////
id: member.id || uuid.v4(), //prefer to let auto-generate id using uuid 
firstName: member.firstName, 
lastName: member.lastName, 
address1: member.address1, 
address2: member.address2||'', 
city:member.city, 
state:member.state, 
zip:member.zip, 
phone:member.phone, 
email: member.email, 
dateJoined: Date.now(), 
dateExpired: Date.now() + 3.154e+10, 
isMember: true,
isAdmin: false, 
onMailingList: true, 
paymentInfo:member.paymentInfo //////////////////////////////////////////////

create(): adds the new member to the datastore. -Takes two parameters =>the new member (wrapped in a "member" property) -and a callback.

getAll(): will get all members in the store. -No parameters -Only used for http GET request in route in backend.

getById(): name is pretty telling. -takes two parameters => members's id and a callback -used in updateMember() and removeMember()

updateMember(): guess what this one does?

takes 3 parameters => the members's id, the member (wrapped in a "member" property), and callback
removeMember(): If I didn't tell you what the previous funciton did, you'll have to guess what this bad boy does too. -takes 2 parameters => members's id and callback -You don't need anything in the body for this one.

MAILING LIST

///////////////////

MailingList: Datastore where the emails will be store for people that only want to be on the mailing list. This is for people that did not sign up to be 1x members, but still want to be on the mailing list and updated. -access by ''/api/mailing-list

newMember(): returns the object for the non-member wanting to be added to the mailing list. 
id: member.id || uuid.v4(), //prefered to use uuid 
email: member.email, 
onMailingList: true

These functions work very similarly to the previous functions for STORE and MEMBERSHIP.

It's important to wrap the body in a "member" property while using POST or PUT.