import printPDF from './print';
import printPDF1 from './print/index2';

const basePrintData = {
    'addressSender': {
        'person':'André Kelling',
        'street':'Brückenstraße 3',
        'city':'12439 Berlin',
        'email':'kontakt@andrekelling.de',
        'phone':'+49 (0) 178 1 / 751 157'
    },
    'address': {
        'company':'Johnlands',
        'person':'John Jonaldo',
        'street':'Jonestreet 123',
        'city':'12345 Jenese Joplin',
    },
    'personalInfo': {
        'website': 'https://andrekelling.de',
        'bank': {
            'person':'André Kelling',
            'name':'Noris Bank',
            'IBAN':'DE12 3456 7890 1234 5678 90'
        },
        'taxoffice': {
            'name':'FA Treptow-Köpenick',
            'number':'St-Nr 12/123/12345'
        }
    },
    'label': {
        'invoicenumber':'Invoice No.',
        'invoice':'Invoice for',
        'tableItems':'Items',
        'tableQty':'Qty',
        'tableSinglePrice':'Price',
        'tableSingleTotal':'Total',
        'totalGrand':'Grand Total',
        'contact':'Kontaktdetails',
        'bank':'Bankverbindung',
        'taxinfo':'Steuernummer',
    }
};
const shortPrintData = {
    'invoice': {
        'number':'2018-15738',
        'date':'28.06.2018',
        'subject':'https://andrekelling.de',
        'total':'2.838,00 €',
        'text':'Etiam quis quam. Nullam at arcu a est sollicitudin euismod. Nulla quis diam. Etiam neque. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut\nal ex ea commodi consequatur? Fusce tellus. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Phasellus enim erat,\nvestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a nibh rutrum consequat. Mauris metus. Phasellus faucibus molestie nisl. Suspendisse sagittis ultrices augue. Integer imperdiet lectus quis justo.'
    },
    'items': {
        [0]: {
            'title':'Templating',
            'description':'predefined custom specialities for vague usage in a framework. Sense a light case weight value for exisiting solution services. Provide a case for universal properties.',
            'amount':'1.200,00 €',
            'qty':'2',
            'total':'2.400,00 €'
        },
        [1]: {
            'title':'Design',
            'description':'outwork digital screen UX in different cases for utilities',
            'amount':'876,00 €',
            'qty':'0.5',
            'total':'438,00 €'
        }
    }
};
const longPrintData = {
    'invoice': {
        'number':'2018-15738',
        'location':'Berlin',
        'date':'28.06.2018',
        'subject':'https://andrekelling.de',
        'total':'6.724,00 €',
        'text':'Etiam quis quam. Nullam at arcu a est sollicitudin euismod. Nulla quis diam. Etiam neque. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut\naliquid ex ea commodi consequatur? Fusce tellus. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Phasellus enim erat,\nvestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a nibh rutrum consequat. Mauris metus. Phasellus faucibus molestie nisl. Suspendisse sagittis ultrices augue. Integer imperdiet lectus quis justo.\n' +
        '\n' +
        'Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Fusce nibh. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Donec vitae arcu. Sed convallis magna eu sem. Cras elementum. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nulla non lectus sed nisl molestie malesuada. Etiam quis quam. In rutrum. Nullam sit amet magna in magna gravida vehicula. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nullam dapibus fermentum ipsum. Etiam posuere lacus quis dolor. Integer imperdiet lectus quis justo. Duis viverra diam non justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. vestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a\n' +
        'nibh rutrum consequat. Mauris metus. Phasellus faucibus molestie'
    },
    'items': {
        [0]: {
            'title':'Templating',
            'description':'predefined custom specialities for vague usage in a framework. Sense a light case weight value for exisiting solution services. Provide a case for universal properties.',
            'amount':'1.200,00 €',
            'qty':'2',
            'total':'2.400,00 €'
        },
        [1]: {
            'title':'Design',
            'description':'outwork digital screen UX in different cases for utilities',
            'amount':'876,00 €',
            'qty':'0.5',
            'total':'438,00 €'
        },
        [2]: {
            'title':'Security',
            'description':'develop a 100% secure workflow mechanism by shutting down your PC',
            'amount':'12,00 €',
            'qty':'1',
            'total':'12,00 €'
        },
        [3]: {
            'title':'Capability Training Closure Business Rules Appliance Regulatory',
            'description':'setup your skill mentoring for future reference & allow $ signs to getUsed `because` this should get covered too. Let me just explain not why ß.',
            'amount':'256,00 €',
            'qty':'2',
            'total':'512,00 €'
        },
        [4]: {
            'title':'Templating',
            'description':'predefined custom specialities for vague usage in a framework. Sense a light case weight value for exisiting solution services. Provide a case for universal properties.',
            'amount':'1.200,00 €',
            'qty':'2',
            'total':'2.400,00 €'
        },
        [5]: {
            'title':'Design',
            'description':'outwork digital screen UX in different cases for utilities',
            'amount':'876,00 €',
            'qty':'0.5',
            'total':'438,00 €'
        },
        [6]: {
            'title':'Security',
            'description':'develop a 100% secure workflow mechanism by shutting down your PC',
            'amount':'12,00 €',
            'qty':'1',
            'total':'12,00 €'
        },
        [7]: {
            'title':'Capability Training Closure Business Rules Appliance Regulatory',
            'description':'setup your skill mentoring for future reference & allow $ signs to getUsed `because` this should get covered too. Let me just explain not why ß.',
            'amount':'256,00 €',
            'qty':'2',
            'total':'512,00 €'
        }
    }
};
const longestPrintData = {
    'invoice': {
        'number':'2018-15738',
        'location':'Berlin',
        'date':'28.06.2018',
        'subject':'https://andrekelling.de',
        'total':'888.556.724,00 €',
        'text':'Etiam quis quam. Nullam at arcu a est sollicitudin euismod. Nulla quis diam. Etiam neque. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut\naliquid ex ea commodi consequatur? Fusce tellus. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Phasellus enim erat,\nvestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a nibh rutrum consequat. Mauris metus. Phasellus faucibus molestie nisl. Suspendisse sagittis ultrices augue. Integer imperdiet lectus quis justo.\n' +
        '\n' +
        'Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Fusce nibh. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Donec vitae arcu. Sed convallis magna eu sem. Cras elementum. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nulla non lectus sed nisl molestie malesuada. Etiam quis quam. In rutrum. Nullam sit amet magna in magna gravida vehicula. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nullam dapibus fermentum ipsum. Etiam posuere lacus quis dolor. Integer imperdiet lectus quis justo. Duis viverra diam non justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis jo egestas. vestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a\n' +
        'nibh rutrum consequat. Mauris metus. Phasellus faucibus molestie'+
        'Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Fusce nibh. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Donec vitae arcu. Sed convallis magna eu sem. Cras elementum. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nulla non lectus sed nisl molestie malesuada. Etiam quis quam. In rutrum. Nullam sit amet magna in magna gravida vehicula. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nullam dapibus fermentum ipsum. Etiam posuere lacus quis dolor. Integer imperdiet lectus quis justo. Duis viverra diam non justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. vestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a\n' +
        'nibh rutrum consequat. Mauris metus. Phasellus faucibus molestie\n' +
        'nisl. Suspendisse sagittis ultrices augue. Integer imperdiet lectus quis\n' +
        'justo.\n' +
        'Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.\n' +
        'Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus,\n' +
        'nec bibendum odio risus sit amet ante. Fusce nibh. Mauris suscipit,\n' +
        'ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis\n'+
        'Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.\n' +
        'Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus,\n' +
        'nec bibendum odio risus sit amet ante. Fusce nibh. Mauris suscipit'
    },
    'items': {
        [0]: {
            'title':'Templating',
            'description':'predefined custom specialities for vague usage in a framework. Sense a light case weight value for exisiting solution services. Provide a case for universal properties.',
            'amount':'1.200,00 €',
            'qty':'2',
            'total':'2.400,00 €'
        },
        [1]: {
            'title':'Design',
            'description':'outwork digital screen UX in different cases for utilities',
            'amount':'876,00 €',
            'qty':'0.5',
            'total':'438,00 €'
        },
        [2]: {
            'title':'Security',
            'description':'develop a 100% secure workflow mechanism by shutting down your PC',
            'amount':'12,00 €',
            'qty':'1',
            'total':'12,00 €'
        },
        [3]: {
            'title':'Capability Training Closure Business Rules Appliance Regulatory',
            'description':'setup your skill mentoring for future reference & allow $ signs to getUsed `because` this should get covered too. Let me just explain not why ß.',
            'amount':'256,00 €',
            'qty':'2',
            'total':'512,00 €'
        },
        [4]: {
            'title':'Templating',
            'description':'predefined custom specialities for vague usage in a framework. Sense a light case weight value for exisiting solution services. Provide a case for universal properties.',
            'amount':'1.200,00 €',
            'qty':'2',
            'total':'2.400,00 €'
        },
        [5]: {
            'title':'Design',
            'description':'outwork digital screen UX in different cases for utilities',
            'amount':'876,00 €',
            'qty':'0.5',
            'total':'438,00 €'
        },
        [6]: {
            'title':'Security',
            'description':'develop a 100% secure workflow mechanism by shutting down your PC',
            'amount':'12,00 €',
            'qty':'1',
            'total':'12,00 €'
        },
        [7]: {
            'title':'Capability Training Closure Business Rules Appliance Regulatory',
            'description':'setup your skill mentoring for future reference & allow $ signs to getUsed `because` this should get covered too. Let me just explain not why ß.',
            'amount':'256,00 €',
            'qty':'2',
            'total':'512,00 €'
        },
        [8]: {
            'title':'Security Security Security Security Security Security Security',
            'description':'develop a 100% secure workflow mechanism by shutting down your PC',
            'amount':'88812,00 €',
            'qty':'888',
            'total':'88812,00 €'
        },
        [9]: {
            'title':'Capability Training Closure Business Rules Appliance Regulatory',
            'description':'setup your skill mentoring for future reference & allow $ signs to getUsed `because` this should get covered too. Let me just explain not why ß.',
            'amount':'888256,00 €',
            'qty':'88',
            'total':'8888512,00 €'
        },
        [10]: {
            'title':'Security',
            'description':'develop a 100% secure workflow mechanism by shutting down your PC',
            'amount':'12,00 €',
            'qty':'1',
            'total':'12,00 €'
        },
        [11]: {
            'title':'Capability Training Closure Business Rules Appliance Regulatory',
            'description':'setup your skill mentoring for future reference & allow $ signs to getUsed `because` this should get covered too. Let me just explain not why ß.',
            'amount':'256,00 €',
            'qty':'2',
            'total':'512,00 €'
        },
        [12]: {
            'title':'Security Security Security Security Security Security Security',
            'description':'develop a 100% secure workflow mechanism by shutting down your PC',
            'amount':'88812,00 €',
            'qty':'888',
            'total':'88812,00 €'
        },
        [13]: {
            'title':'Capability Training Closure Business Rules Appliance Regulatory',
            'description':'setup your skill mentoring for future reference & allow $ signs to getUsed `because` this should get covered too. Let me just explain not why ß.',
            'amount':'888256,00 €',
            'qty':'88',
            'total':'8888512,00 €'
        },
        [14]: {
            'title':'Security Security Security Security Security Security Security',
            'description':'develop a 100% secure workflow mechanism by shutting down your PC',
            'amount':'88812,00 €',
            'qty':'888',
            'total':'88812,00 €'
        },
        [15]: {
            'title':'Capability Training Closure Business Rules Appliance Regulatory',
            'description':'setup your skill mentoring for future reference & allow $ signs to getUsed `because` this should get covered too. Let me just explain not why ß.',
            'amount':'888256,00 €',
            'qty':'88',
            'total':'8888512,00 €'
        }
    },
    'section' : {
        "_id": "5fb2ddd518661b4ac16ae371",
        "quantity": 3,
        "unit": null,
        "buildingComponents": "Fjerning av avfall (conteiner/ isekk).",
        "code": null,
        "level": null,
        "type": "ContainerRent",
        "description": "Vi fjerner avfall som er generert fra renoveringen i henhold til tilbudet. Dersom det oppstår bestilling av merarbeid, kan denne posten endres i takt med økt behov for avfallshåndtering. \n\nVi bruker iSekk eller leier en Container, alt ut ifra behov i prosjekterings fasen. \n\nFjerning av farlig avfall er ikke inkludert i denne posten. \nDet er egen forskrift for håndtering av slikt avfall og ikke beregnet her. ",
        "subMaterials": [
            {
                "_id": "5ff38b36537ea822900a1ca7",
                "application": "LEIE AV CONTAINER/INNKL.TØMMING",
                "unit": "stk",
                "itemPrice": 8938,
                "inverseFactor": null,
                "subject": "5fe33150d78f211055295d34",
                "NS3420": null,
                "useListPrice": null,
                "quantity": {
                    "type": null,
                    "inTotal": null,
                    "quantityPerComponent": 2.5,
                    "svinn": 0
                },
                "time": {
                    "hoursPerComponent": 0,
                    "minPerComponent": 0,
                    "totalTimeConsumption": null
                },
                "category": "ContainerRent",
                "documents": [],
                "createdAt": "2020-11-16T20:14:38.763Z",
                "updatedAt": "2021-01-02T13:51:32.594Z",
                "__v": 0,
                "groupId": null,
                "masterMaterialId": "5fb2ddae18661b4ac16ae36f",
                "subjectDoc": {
                    "_id": "5fe33150d78f211055295d34",
                    "hourlyRate": 280,
                    "isDefault": null,
                    "id": 2,
                    "description": "Avfallshåndtering",
                    "createdAt": "2020-12-23T12:00:16.798Z",
                    "updatedAt": "2020-12-26T17:14:57.735Z",
                    "__v": 0
                },
                "varePrisWithCapCharges": 9384.9,
                "varePrisWithCapChargesWithQuantity": 28154.699999999997,
                "varePrisWithCapChargesWithQuantityAndPaslag": 29562,
                "totalMinutePerSectionQuantity": 0,
                "totalTimePrice": 0,
                "totalPrice": 29562
            }
        ],
        "index": 1,
        "subOfVarePris": 8938,
        "varePrisWithCapCharges": 9384.9,
        "varePrisWithCapChargesWithQuantity": 28154.699999999997,
        "varePrisWithCapChargesWithQuantityAndPaslag": 29562,
        "totalCostPerHour": 599.48,
        "totalCostPerMinute": 9.991333333333333,
        "totalCostPerHourWithCapCharges": 629.4540000000001,
        "totalCostPerMinuteWithCapCharges": 10.490900000000002,
        "totalMinutePerSection": 0,
        "totalMinutePerSectionQuantity": 0,
        "totalTimePrice": 0,
        "totalPrice": 29562
    }
};

const basePrintData1 = {
    'senderCompany': {
        'name':'Company1',
        'street':'Brückenstraße 3',
        'city':'12439 Berlin',
        'email':'kontakt@andrekelling.de',
        'phone':'+49 (0) 178 1 / 751 157'
    },
    'receiveCompany': {
        'name':'Company2',
        'street':'Brückenstraße 3',
        'city':'12439 Berlin',
        'email':'kontakt@andrekelling.de',
        'phone':'+49 (0) 178 1 / 751 157'
    },
    'personalInfo': {
        'website': 'https://andrekelling.de',
        'bank': {
            'person':'André Kelling',
            'name':'Noris Bank',
            'IBAN':'DE12 3456 7890 1234 5678 90'
        },
        'taxoffice': {
            'name':'FA Treptow-Köpenick',
            'number':'St-Nr 12/123/12345'
        }
    },
    'label': {
        'invoicenumber':'Invoice No.',
        'invoice':'Invoice for',
        'tableItems':'Items',
        'tableQty':'Qty',
        'tableSinglePrice':'Price',
        'tableSingleTotal':'Total',
        'totalGrand':'Grand Total',
        'contact':'Kontaktdetails',
        'bank':'Bankverbindung',
        'taxinfo':'Steuernummer',
    }
};

var mydata = {
        "subtotal": "128770.23",
        "surchargeMaterial": 5,
        "surchargeMaterialValue" : "6438.51",
        "surchargeWork": 0,
        "surchargeWorkValue": "0.00",
        "total": "135208.74",
        "data": [
            {
                "_id": "5fb2dd3918661b4ac16ae36d",
                "quantity": 3,
                "unit": null,
                "buildingComponents": "Prosjekledelse/Administrasjon",
                "code": null,
                "level": null,
                "type": "Engineering",
                "description": "Vi prosjekterer og utfører prosjektet slik at det ikke oppstår skade på konstruksjoner og materialer på grunn av vannsøl, lekkasjevann og kondens.\nMed god prosjektering er sannsynligheten for feil kraftig redusert og kunden får et bad som er både trygt og i forkriftsmessig stand. Våre prosjektledere har god innsikt i en rekke fagområder, og er godt  orientert om våtrom og har god produktoversikt. Vi har god kunnskap om lover og regler, gjeldende krav som TEK 17 og Våtromsnormen. \n\nByggebransjens våtromsnorm stiller krav til både prosjektering og utførelse. \nVåtrom skal ha sluk og gulv med tilstrekkelig fall mot sluk for de deler av gulvet som må antas å bli utsatt for vann i brukssituasjonen. Rom med sluk skal være utformet slik at eventuelt lekkasjevann ledes til sluk. I våtrom skal bakenforliggende konstruksjoner som kan påvirkes negativt av fukt være beskyttet av et egnet vanntett sjikt. Gjennomføringer skal ikke svekke tettheten. Materialer velges slik at faren for mugg- og soppdannelse er minimal. Gulv og vegger som kan komme til å bli utsatt for vannsøl, lekkasjevann eller kondens, skal utføres med fuktbestandige materialer. Vegger med innebygde sisterner eller lignende skal sikres mot fuktinntrengning fra lekkasjer fra installasjonen.\n\nVår oppgave som våtromsgodkjent mesterbedrift er å lage en god “oppskrift” på prosjekteringen som allerede fra vår side begynner ved befaring. Ved befaringen vil vi tegne opp, måle, lage en god planløsning med tanke på plassering av sluk, dusjhjørne og innebygget cisterne mm. som skal plasseres på våtrommet. Det vil bli utarbeidet material liste og type produkter som brukes i renoverings prosjektet for hver enkelt bad vi befarer. Denne materiell listen vil kunden få før oppstart av arbeidet, i tilbudet. Når prosjektet er i gang, vil vi supplere vår dokumentasjon med sjekklister og poster samt bilder underveis i rehabiliteringen. Kundens flisvalg (størrelse og type) vil inngå i prosjekteringen frem til utførelse av flislegging. \n\nEt bad som bygges etter våtromsnormen og følger krav som TEK17 vil være en investering for huseier fordi verdien på boligen vil øke. ",
                "subMaterials": [
                    {
                        "_id": "5ff30de9537ea822900a1ca2",
                        "application": "Prosjektleder",
                        "itemPrice": 1,
                        "inverseFactor": null,
                        "subject": "5fd76ebf6d3c3011190a108c",
                        "NS3420": null,
                        "useListPrice": null,
                        "quantity": {
                            "type": null,
                            "inTotal": null,
                            "quantityPerComponent": 1,
                            "svinn": 0
                        },
                        "time": {
                            "hoursPerComponent": 5,
                            "minPerComponent": 300,
                            "totalTimeConsumption": null
                        },
                        "category": "Engineering",
                        "documents": [],
                        "createdAt": "2020-11-13T22:57:31.367Z",
                        "updatedAt": "2021-01-04T12:49:14.531Z",
                        "__v": 0,
                        "unit": "RS",
                        "fdvDocument": "",
                        "groupId": "5ff0706e537ea822900a1c97",
                        "masterMaterialId": "5faf0f5b13797461ed4d4586",
                        "subjectDoc": {
                            "_id": "5fd76ebf6d3c3011190a108c",
                            "hourlyRate": 450,
                            "isDefault": false,
                            "id": 1,
                            "description": "Prosjektering",
                            "createdAt": "2020-12-14T13:55:11.951Z",
                            "updatedAt": "2021-02-10T12:10:18.365Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 1.05,
                        "varePrisWithCapChargesWithQuantity": 3.1500000000000004,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 3,
                        "totalMinutePerSectionQuantity": 900,
                        "totalTimePrice": 9531.732,
                        "totalPrice": 9534.732
                    }
                ],
                "index": 0,
                "subOfVarePris": 1,
                "varePrisWithCapCharges": 1.05,
                "varePrisWithCapChargesWithQuantity": 3.1500000000000004,
                "varePrisWithCapChargesWithQuantityAndPaslag": 3,
                "totalCostPerHour": 599.48,
                "totalCostPerMinute": 9.991333333333333,
                "totalCostPerHourWithCapCharges": 635.4488,
                "totalCostPerMinuteWithCapCharges": 10.590813333333333,
                "totalMinutePerSection": 300,
                "totalMinutePerSectionQuantity": 900,
                "totalTimePrice": 9531.73,
                "totalPrice": 9534.73
            },
            {
                "_id": "5fb2ddd518661b4ac16ae371",
                "quantity": 3,
                "unit": null,
                "buildingComponents": "Fjerning av avfall (conteiner/ isekk).",
                "code": null,
                "level": null,
                "type": "ContainerRent",
                "description": "Vi fjerner avfall som er generert fra renoveringen i henhold til tilbudet. Dersom det oppstår bestilling av merarbeid, kan denne posten endres i takt med økt behov for avfallshåndtering. \n\nVi bruker iSekk eller leier en Container, alt ut ifra behov i prosjekterings fasen. \n\nFjerning av farlig avfall er ikke inkludert i denne posten. \nDet er egen forskrift for håndtering av slikt avfall og ikke beregnet her. ",
                "subMaterials": [
                    {
                        "_id": "5ff38b36537ea822900a1ca7",
                        "application": "LEIE AV CONTAINER/INNKL.TØMMING",
                        "unit": "stk",
                        "itemPrice": 8938,
                        "inverseFactor": null,
                        "subject": "5fe33150d78f211055295d34",
                        "NS3420": null,
                        "useListPrice": null,
                        "quantity": {
                            "type": null,
                            "inTotal": null,
                            "quantityPerComponent": 2.5,
                            "svinn": 0
                        },
                        "time": {
                            "hoursPerComponent": 0,
                            "minPerComponent": 0,
                            "totalTimeConsumption": null
                        },
                        "category": "ContainerRent",
                        "documents": [],
                        "createdAt": "2020-11-16T20:14:38.763Z",
                        "updatedAt": "2021-01-02T13:51:32.594Z",
                        "__v": 0,
                        "groupId": null,
                        "masterMaterialId": "5fb2ddae18661b4ac16ae36f",
                        "subjectDoc": {
                            "_id": "5fe33150d78f211055295d34",
                            "hourlyRate": 280,
                            "isDefault": null,
                            "id": 2,
                            "description": "Avfallshåndtering",
                            "createdAt": "2020-12-23T12:00:16.798Z",
                            "updatedAt": "2020-12-26T17:14:57.735Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 9384.9,
                        "varePrisWithCapChargesWithQuantity": 28154.699999999997,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 29562,
                        "totalMinutePerSectionQuantity": 0,
                        "totalTimePrice": 0,
                        "totalPrice": 29562
                    }
                ],
                "index": 1,
                "subOfVarePris": 8938,
                "varePrisWithCapCharges": 9384.9,
                "varePrisWithCapChargesWithQuantity": 28154.699999999997,
                "varePrisWithCapChargesWithQuantityAndPaslag": 29562,
                "totalCostPerHour": 599.48,
                "totalCostPerMinute": 9.991333333333333,
                "totalCostPerHourWithCapCharges": 629.4540000000001,
                "totalCostPerMinuteWithCapCharges": 10.490900000000002,
                "totalMinutePerSection": 0,
                "totalMinutePerSectionQuantity": 0,
                "totalTimePrice": 0,
                "totalPrice": 29562
            },
            {
                "_id": "5fb2dfe518661b4ac16ae383",
                "quantity": 5,
                "unit": null,
                "buildingComponents": "Tildekning og Rydding",
                "code": null,
                "level": null,
                "type": "Coverage",
                "description": "Vi dokumenterer med bilder av områder som vil berøres av renoveringen. Vi avklarer tidligere slitasjeskader og lignende før tildekning. Vi dekker 1. laget på gulvet med dekk filt som teipes i skjøter med Tesa maskeringsteip, som vil betydelig redusere skade i underliggende gulv.  2. laget vil bli dekket med tildekningspapp egnet for gulv med Tesa maskeringsteip. Tildekningspappen kan skiftes ut underveis i renoveringen etter behov. Vi bruker støv beskytter for tildekning av dører av Polyetenplast. Denne beskytter mot støv og lukt ved sliping, pussing, maling og annen innendørs oppussing. Monteres med vanlig maskeringstape og er inklusiv kraftig glidelås. Disse tiltakene er for at vi skal klare å redusere skader, støv spredning, og begrense det til områder som renoveres.\nNoe støv må man allikevel påregnes ved gjennomgang mellom rom. Det kan bli nødvendig fra kundens side med noe mer vedlikehold (støvsuging, vasking) utenfor tildekningsrom. Vårt ansvars område er i tildekningsrom.",
                "subMaterials": [
                    {
                        "_id": "5ff38b11537ea822900a1ca4",
                        "application": "DEKNINGSPAPP GULV 125CM 140G",
                        "unit": "m2",
                        "itemPrice": 93.8,
                        "inverseFactor": null,
                        "subject": "5fe7514da781bf58838c3c7d",
                        "NS3420": "49043884",
                        "useListPrice": null,
                        "quantity": {
                            "type": null,
                            "inTotal": null,
                            "quantityPerComponent": 1,
                            "svinn": 10
                        },
                        "time": {
                            "hoursPerComponent": 0.1,
                            "minPerComponent": 6,
                            "totalTimeConsumption": null
                        },
                        "category": "Coverage",
                        "documents": [],
                        "createdAt": "2020-11-16T20:17:48.319Z",
                        "updatedAt": "2021-01-02T13:53:15.750Z",
                        "__v": 0,
                        "groupId": null,
                        "masterMaterialId": "5fb2de6c18661b4ac16ae373",
                        "fdvDocument": "http://ec2-18-216-130-99.us-east-2.compute.amazonaws.com:3000/uploads/1610293722178Dekningspapp Brosjyre.pdf",
                        "subjectDoc": {
                            "_id": "5fe7514da781bf58838c3c7d",
                            "hourlyRate": 280,
                            "isDefault": false,
                            "id": 3,
                            "description": "Rivingsarbeider",
                            "createdAt": "2020-12-26T15:05:49.859Z",
                            "updatedAt": "2020-12-26T15:05:49.859Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 98.49,
                        "varePrisWithCapChargesWithQuantity": 492.45,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 522,
                        "totalMinutePerSectionQuantity": 30,
                        "totalTimePrice": 317.7244,
                        "totalPrice": 839.7244000000001
                    },
                    {
                        "_id": "5ff38b11537ea822900a1ca5",
                        "application": "Ultipro Malerfolie 2,60X15M",
                        "unit": "m2",
                        "itemPrice": 103.48,
                        "inverseFactor": null,
                        "subject": "5fe7514da781bf58838c3c7d",
                        "NS3420": "44578872",
                        "useListPrice": null,
                        "quantity": {
                            "type": null,
                            "inTotal": null,
                            "quantityPerComponent": 1,
                            "svinn": 10
                        },
                        "time": {
                            "hoursPerComponent": 0.083,
                            "minPerComponent": 5,
                            "totalTimeConsumption": null
                        },
                        "category": "Coverage",
                        "documents": [],
                        "createdAt": "2020-11-16T20:18:46.860Z",
                        "updatedAt": "2021-01-02T13:54:57.902Z",
                        "__v": 0,
                        "groupId": null,
                        "masterMaterialId": "5fb2dea618661b4ac16ae375",
                        "subjectDoc": {
                            "_id": "5fe7514da781bf58838c3c7d",
                            "hourlyRate": 280,
                            "isDefault": false,
                            "id": 3,
                            "description": "Rivingsarbeider",
                            "createdAt": "2020-12-26T15:05:49.859Z",
                            "updatedAt": "2020-12-26T15:05:49.859Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 108.654,
                        "varePrisWithCapChargesWithQuantity": 543.27,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 576,
                        "totalMinutePerSectionQuantity": 25,
                        "totalTimePrice": 264.7703333333333,
                        "totalPrice": 840.7703333333334
                    },
                    {
                        "_id": "5ff38b11537ea822900a1ca6",
                        "application": "Optimera Rokka DEKKFILT 1X10M 220G/M2",
                        "unit": "m2",
                        "itemPrice": 87.2,
                        "inverseFactor": null,
                        "subject": "5fe7514da781bf58838c3c7d",
                        "NS3420": "46304773",
                        "useListPrice": null,
                        "quantity": {
                            "type": null,
                            "inTotal": null,
                            "quantityPerComponent": 1,
                            "svinn": 10
                        },
                        "time": {
                            "hoursPerComponent": 0.1,
                            "minPerComponent": 6,
                            "totalTimeConsumption": null
                        },
                        "category": "Coverage",
                        "documents": [],
                        "createdAt": "2020-11-16T20:19:27.694Z",
                        "updatedAt": "2021-01-02T13:56:02.089Z",
                        "__v": 0,
                        "groupId": null,
                        "masterMaterialId": "5fb2decf18661b4ac16ae377",
                        "fdvDocument": "http://ec2-18-216-130-99.us-east-2.compute.amazonaws.com:3000/uploads/1610295663752Rokka dekklift.pdf",
                        "subjectDoc": {
                            "_id": "5fe7514da781bf58838c3c7d",
                            "hourlyRate": 280,
                            "isDefault": false,
                            "id": 3,
                            "description": "Rivingsarbeider",
                            "createdAt": "2020-12-26T15:05:49.859Z",
                            "updatedAt": "2020-12-26T15:05:49.859Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 91.56,
                        "varePrisWithCapChargesWithQuantity": 457.8,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 485,
                        "totalMinutePerSectionQuantity": 30,
                        "totalTimePrice": 317.7244,
                        "totalPrice": 802.7244000000001
                    }
                ],
                "index": 2,
                "subOfVarePris": 284.48,
                "varePrisWithCapCharges": 298.704,
                "varePrisWithCapChargesWithQuantity": 1493.52,
                "varePrisWithCapChargesWithQuantityAndPaslag": 1583,
                "totalCostPerHour": 599.48,
                "totalCostPerMinute": 9.991333333333333,
                "totalCostPerHourWithCapCharges": 635.4488,
                "totalCostPerMinuteWithCapCharges": 10.590813333333333,
                "totalMinutePerSection": 17,
                "totalMinutePerSectionQuantity": 85,
                "totalTimePrice": 900.22,
                "totalPrice": 2483.2200000000003
            },
            {
                "_id": "5fb2dfb418661b4ac16ae37f",
                "quantity": 10,
                "unit": null,
                "buildingComponents": "Riving av bad- Tregulv",
                "code": null,
                "level": null,
                "type": "Demolition",
                "description": "Alle skap/hyller må fjernes for private eiendeler før riving starter. \nVi demonterer baderoms innredninger og diverse inventar. Ved avtale om å beholde inventar må dette komme frem i skriftlig kontrakt og plass for oppbevaring bør avtales på forhånd. \nVed riving av badet blir vannrørene til badet stengt, og eventuelt vannrør blir plugget. Hvis nødvendig vil en elektriker koble fra strømmen på badet.\nDet eksisterende badet rives ned til stenderverk. Isolasjon fjernes. Diverse materialer blir fjernet fra vegg, gulv og tak. Dette kan f.eks være fliser, våtromsplater, gipsplater, osb plater,  panel, linoleum etc. Gulvet pigges og sluk og gulv spon fjernes. \n",
                "subMaterials": [
                    {
                        "_id": "5ff38bd6537ea822900a1cab",
                        "groupId": "5febcee7537ea822900a1c2b",
                        "application": "Riving av bad tregulv",
                        "unit": "m2",
                        "itemPrice": 1,
                        "inverseFactor": null,
                        "subject": "5fe7514da781bf58838c3c7d",
                        "NS3420": "",
                        "useListPrice": null,
                        "quantity": {
                            "type": "",
                            "inTotal": null,
                            "quantityPerComponent": 1,
                            "svinn": 0
                        },
                        "time": {
                            "hoursPerComponent": 5.7,
                            "minPerComponent": 342,
                            "totalTimeConsumption": ""
                        },
                        "category": "Demolition",
                        "documents": [],
                        "createdAt": "2020-12-29T23:40:36.503Z",
                        "updatedAt": "2021-01-02T14:00:21.905Z",
                        "__v": 0,
                        "masterMaterialId": "5febbe74537ea822900a1c21",
                        "subjectDoc": {
                            "_id": "5fe7514da781bf58838c3c7d",
                            "hourlyRate": 280,
                            "isDefault": false,
                            "id": 3,
                            "description": "Rivingsarbeider",
                            "createdAt": "2020-12-26T15:05:49.859Z",
                            "updatedAt": "2020-12-26T15:05:49.859Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 1.05,
                        "varePrisWithCapChargesWithQuantity": 10.5,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 11,
                        "totalMinutePerSectionQuantity": 3420,
                        "totalTimePrice": 36220.5816,
                        "totalPrice": 36231.5816
                    }
                ],
                "index": 3,
                "subOfVarePris": 1,
                "varePrisWithCapCharges": 1.05,
                "varePrisWithCapChargesWithQuantity": 10.5,
                "varePrisWithCapChargesWithQuantityAndPaslag": 11,
                "totalCostPerHour": 599.48,
                "totalCostPerMinute": 9.991333333333333,
                "totalCostPerHourWithCapCharges": 635.4488,
                "totalCostPerMinuteWithCapCharges": 10.590813333333333,
                "totalMinutePerSection": 342,
                "totalMinutePerSectionQuantity": 3420,
                "totalTimePrice": 36220.58,
                "totalPrice": 36231.58
            },
            {
                "_id": "5fcdf742e7f16b7cf3287dd0",
                "quantity": 5,
                "unit": null,
                "buildingComponents": "Riving av bad- Støpt på flat mark",
                "code": null,
                "level": null,
                "type": "Demolition",
                "description": "Alle skap/hyller må fjernes for private eiendeler før riving starter. \nVi demonterer baderoms innredninger og diverse inventar. Ved avtale om å beholde inventar må dette komme frem i skriftlig kontrakt og plass for oppbevaring bør avtales på forhånd. \nVed riving av badet blir vannrørene til badet stengt, og eventuelt vannrør blir plugget. Hvis nødvendig vil en elektriker koble fra strømmen på badet.\nDet eksisterende badet rives ned til stenderverk. Isolasjon fjernes. Diverse materialer blir fjernet fra vegg, gulv og tak. Dette kan f.eks være fliser, våtromsplater, gipsplater, osb plater,  panel, linoleum etc. Gulvet pigges sammen med netting, sluk og varmekabler fjernes. Gulvet pigges ned ca. 12-18 cm sammenlignet med gulvet i gang, eller til tilstøtende rom. Under betongdekke er det ofte blandings masse av jord/stein. Vi graver ikke lenger ned enn grunn fundament. Baderomsterskel blir betydelig redusert og baderommet vil få nesten lik høyde som tilstøtende rom i henhold til våtromsnormen. ",
                "subMaterials": [
                    {
                        "_id": "5ff38ba9537ea822900a1caa",
                        "groupId": "5febcee7537ea822900a1c2b",
                        "application": "Riving av bad støpt på flatmark",
                        "unit": "m2",
                        "itemPrice": 1,
                        "inverseFactor": null,
                        "subject": "5fe7514da781bf58838c3c7d",
                        "NS3420": "",
                        "useListPrice": null,
                        "quantity": {
                            "type": "",
                            "inTotal": null,
                            "quantityPerComponent": 1,
                            "svinn": 0
                        },
                        "time": {
                            "hoursPerComponent": 5.7,
                            "minPerComponent": 342,
                            "totalTimeConsumption": ""
                        },
                        "category": "Demolition",
                        "documents": [],
                        "createdAt": "2020-12-29T23:37:47.724Z",
                        "updatedAt": "2021-01-02T13:59:40.064Z",
                        "__v": 0,
                        "masterMaterialId": "5febbdcb537ea822900a1c20",
                        "subjectDoc": {
                            "_id": "5fe7514da781bf58838c3c7d",
                            "hourlyRate": 280,
                            "isDefault": false,
                            "id": 3,
                            "description": "Rivingsarbeider",
                            "createdAt": "2020-12-26T15:05:49.859Z",
                            "updatedAt": "2020-12-26T15:05:49.859Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 1.05,
                        "varePrisWithCapChargesWithQuantity": 5.25,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 6,
                        "totalMinutePerSectionQuantity": 1710,
                        "totalTimePrice": 18110.2908,
                        "totalPrice": 18116.2908
                    }
                ],
                "index": 3,
                "subOfVarePris": 1,
                "varePrisWithCapCharges": 1.05,
                "varePrisWithCapChargesWithQuantity": 5.25,
                "varePrisWithCapChargesWithQuantityAndPaslag": 6,
                "totalCostPerHour": 599.48,
                "totalCostPerMinute": 9.991333333333333,
                "totalCostPerHourWithCapCharges": 635.4488,
                "totalCostPerMinuteWithCapCharges": 10.590813333333333,
                "totalMinutePerSection": 342,
                "totalMinutePerSectionQuantity": 1710,
                "totalTimePrice": 18110.29,
                "totalPrice": 18116.29
            },
            {
                "_id": "5fb2e2f918661b4ac16ae393",
                "quantity": 3,
                "unit": null,
                "buildingComponents": "Underlag for flis vegg",
                "code": null,
                "level": null,
                "type": "Carpentry",
                "description": "Vi starter med å rette vegger, for klargjøring for elektriker og rørlegger. Vi bruker lekter som varierer i str. fra 23 x 48 mm til 48 x 48 mm. Det legges isolasjon før det lukkes med osb plater 12 mm. Osb plater beskytter rør og elektriske kabler, dette for å beskytte det skjulte rør og elektriske anlegget. \nTotale veggtykkelsen etter flislegging vil være ca. 4 cm.\nDet må beregnes skruer i lengder som ikke går gjennom osb platene. ",
                "subMaterials": [
                    {
                        "_id": "5ff39504537ea822900a1ccb",
                        "subject": "5fe752e7a781bf58838c3c84",
                        "application": "OSBPL 3 12,5X2397X1200 TG2",
                        "unit": "m2",
                        "itemPrice": 65.76,
                        "time": {
                            "minPerComponent": 30,
                            "hoursPerComponent": 0.5,
                            "totalTimeConsumption": null
                        },
                        "category": "Carpentry",
                        "NS3420": null,
                        "__v": 1,
                        "createdAt": "2020-12-26T16:04:44.313Z",
                        "documents": [],
                        "groupId": "5fe75ce7a781bf58838c3c93",
                        "inverseFactor": null,
                        "quantity": {
                            "inTotal": null,
                            "quantityPerComponent": 1.05,
                            "svinn": 20,
                            "type": null
                        },
                        "updatedAt": "2021-01-02T14:17:46.805Z",
                        "useListPrice": null,
                        "masterMaterialId": "5fabc9e15ba24a1a9046ad3f",
                        "subjectDoc": {
                            "_id": "5fe752e7a781bf58838c3c84",
                            "hourlyRate": 280,
                            "isDefault": false,
                            "id": 4,
                            "description": "Tømrerarbeider",
                            "createdAt": "2020-12-26T15:12:39.249Z",
                            "updatedAt": "2020-12-26T17:16:43.396Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 69.048,
                        "varePrisWithCapChargesWithQuantity": 207.144,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 220,
                        "totalMinutePerSectionQuantity": 90,
                        "totalTimePrice": 953.1732,
                        "totalPrice": 1173.1732
                    },
                    {
                        "_id": "5ff39504537ea822900a1ccc",
                        "subject": "5fe752e7a781bf58838c3c84",
                        "application": "FURU 48X048 LEKT/REKKE KL1",
                        "unit": "lm",
                        "itemPrice": 9.24,
                        "time": {
                            "minPerComponent": 20,
                            "hoursPerComponent": 0.333,
                            "totalTimeConsumption": null
                        },
                        "category": "Carpentry",
                        "NS3420": null,
                        "__v": 1,
                        "createdAt": "2020-12-26T16:04:22.826Z",
                        "documents": [],
                        "groupId": "5fed177d537ea822900a1c83",
                        "inverseFactor": null,
                        "quantity": {
                            "inTotal": null,
                            "quantityPerComponent": 3.1,
                            "svinn": 20,
                            "type": null
                        },
                        "updatedAt": "2021-01-02T14:14:48.520Z",
                        "useListPrice": null,
                        "masterMaterialId": "5fabc9e15ba24a1a9046ad3d",
                        "subjectDoc": {
                            "_id": "5fe752e7a781bf58838c3c84",
                            "hourlyRate": 280,
                            "isDefault": false,
                            "id": 4,
                            "description": "Tømrerarbeider",
                            "createdAt": "2020-12-26T15:12:39.249Z",
                            "updatedAt": "2020-12-26T17:16:43.396Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 9.702,
                        "varePrisWithCapChargesWithQuantity": 29.106,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 31,
                        "totalMinutePerSectionQuantity": 60,
                        "totalTimePrice": 635.4488,
                        "totalPrice": 666.4488
                    },
                    {
                        "_id": "5ff39504537ea822900a1ccd",
                        "subject": "5fe752e7a781bf58838c3c84",
                        "application": "GLAVA PROFF 34 PLATE 70X570X12",
                        "unit": "m2",
                        "itemPrice": 38.09,
                        "time": {
                            "minPerComponent": 10,
                            "hoursPerComponent": 0.167,
                            "totalTimeConsumption": null
                        },
                        "category": "Carpentry",
                        "NS3420": null,
                        "__v": 1,
                        "createdAt": "2020-12-26T16:04:44.189Z",
                        "documents": [],
                        "groupId": "5fe75ce7a781bf58838c3c93",
                        "inverseFactor": null,
                        "quantity": {
                            "inTotal": null,
                            "quantityPerComponent": 1,
                            "svinn": 20,
                            "type": null
                        },
                        "updatedAt": "2021-01-02T14:22:23.844Z",
                        "useListPrice": null,
                        "masterMaterialId": "5fabc9e15ba24a1a9046ad40",
                        "subjectDoc": {
                            "_id": "5fe752e7a781bf58838c3c84",
                            "hourlyRate": 280,
                            "isDefault": false,
                            "id": 4,
                            "description": "Tømrerarbeider",
                            "createdAt": "2020-12-26T15:12:39.249Z",
                            "updatedAt": "2020-12-26T17:16:43.396Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 39.9945,
                        "varePrisWithCapChargesWithQuantity": 119.9835,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 127,
                        "totalMinutePerSectionQuantity": 30,
                        "totalTimePrice": 317.7244,
                        "totalPrice": 444.7244
                    }
                ],
                "index": 4,
                "subOfVarePris": 113.09,
                "varePrisWithCapCharges": 118.7445,
                "varePrisWithCapChargesWithQuantity": 356.2335,
                "varePrisWithCapChargesWithQuantityAndPaslag": 378,
                "totalCostPerHour": 599.48,
                "totalCostPerMinute": 9.991333333333333,
                "totalCostPerHourWithCapCharges": 635.4488,
                "totalCostPerMinuteWithCapCharges": 10.590813333333333,
                "totalMinutePerSection": 60,
                "totalMinutePerSectionQuantity": 180,
                "totalTimePrice": 1906.35,
                "totalPrice": 2284.35
            },
            {
                "_id": "6012fb5ef41f1b112d59d72e",
                "quantity": 3,
                "unit": null,
                "buildingComponents": "Membran kasse for wc",
                "code": null,
                "level": null,
                "type": "Membraneworker",
                "description": null,
                "subMaterials": [
                    {
                        "_id": "6012fb5ef41f1b112d59d72b",
                        "quantity": {
                            "type": null,
                            "svinn": 20,
                            "inTotal": null,
                            "quantityPerComponent": 0.1
                        },
                        "useListPrice": null,
                        "application": "LItex Selvklebende skjøtebånd",
                        "unit": "m2",
                        "itemPrice": 195,
                        "inverseFactor": null,
                        "subject": "5fe751b0a781bf58838c3c80",
                        "NS3420": null,
                        "time": {
                            "hoursPerComponent": 0.2,
                            "minPerComponent": 12,
                            "totalTimeConsumption": null
                        },
                        "documents": [],
                        "__v": 0,
                        "subjectDoc": {
                            "_id": "5fe751b0a781bf58838c3c80",
                            "hourlyRate": 280,
                            "isDefault": false,
                            "id": 5,
                            "description": "Membranarbeider",
                            "createdAt": "2020-12-26T15:07:28.311Z",
                            "updatedAt": "2020-12-26T17:16:56.499Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 204.75,
                        "varePrisWithCapChargesWithQuantity": 614.25,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 651,
                        "totalMinutePerSectionQuantity": 36,
                        "totalTimePrice": 381.26928,
                        "totalPrice": 1032.26928
                    },
                    {
                        "_id": "6012fb5ef41f1b112d59d72c",
                        "quantity": {
                            "type": "",
                            "svinn": 20,
                            "inTotal": null,
                            "quantityPerComponent": 1
                        },
                        "useListPrice": null,
                        "application": "Våtromsplater 12,5x600x2500 mm Wedi",
                        "unit": "m2",
                        "itemPrice": 110,
                        "inverseFactor": null,
                        "subject": "5fe751b0a781bf58838c3c80",
                        "NS3420": "",
                        "time": {
                            "hoursPerComponent": 0.49,
                            "minPerComponent": 29.4,
                            "totalTimeConsumption": ""
                        },
                        "documents": [],
                        "__v": 0,
                        "subjectDoc": {
                            "_id": "5fe751b0a781bf58838c3c80",
                            "hourlyRate": 280,
                            "isDefault": false,
                            "id": 5,
                            "description": "Membranarbeider",
                            "createdAt": "2020-12-26T15:07:28.311Z",
                            "updatedAt": "2020-12-26T17:16:56.499Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 115.5,
                        "varePrisWithCapChargesWithQuantity": 346.5,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 367,
                        "totalMinutePerSectionQuantity": 88.19999999999999,
                        "totalTimePrice": 934.1097359999999,
                        "totalPrice": 1301.1097359999999
                    },
                    {
                        "_id": "6012fb5ef41f1b112d59d72d",
                        "quantity": {
                            "type": null,
                            "svinn": 20,
                            "inTotal": null,
                            "quantityPerComponent": 9
                        },
                        "useListPrice": null,
                        "application": "JACKON VÅTROM SKRUE &",
                        "unit": "stk",
                        "itemPrice": 1.68,
                        "inverseFactor": null,
                        "subject": "5fe751b0a781bf58838c3c80",
                        "NS3420": null,
                        "time": {
                            "hoursPerComponent": 0,
                            "minPerComponent": 0,
                            "totalTimeConsumption": null
                        },
                        "documents": [],
                        "__v": 0,
                        "subjectDoc": {
                            "_id": "5fe751b0a781bf58838c3c80",
                            "hourlyRate": 280,
                            "isDefault": false,
                            "id": 5,
                            "description": "Membranarbeider",
                            "createdAt": "2020-12-26T15:07:28.311Z",
                            "updatedAt": "2020-12-26T17:16:56.499Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 1.764,
                        "varePrisWithCapChargesWithQuantity": 5.292,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 6,
                        "totalMinutePerSectionQuantity": 0,
                        "totalTimePrice": 0,
                        "totalPrice": 6
                    }
                ],
                "index": 5,
                "subOfVarePris": 306.68,
                "varePrisWithCapCharges": 322.014,
                "varePrisWithCapChargesWithQuantity": 966.042,
                "varePrisWithCapChargesWithQuantityAndPaslag": 1024,
                "totalCostPerHour": 599.48,
                "totalCostPerMinute": 9.991333333333333,
                "totalCostPerHourWithCapCharges": 635.4488,
                "totalCostPerMinuteWithCapCharges": 10.590813333333333,
                "totalMinutePerSection": 41.4,
                "totalMinutePerSectionQuantity": 124.19999999999999,
                "totalTimePrice": 1315.38,
                "totalPrice": 2339.38
            },
            {
                "_id": "5fb2f5fa18661b4ac16ae453",
                "quantity": 10,
                "unit": null,
                "buildingComponents": "Speibelysning med Stikkontakt",
                "code": null,
                "level": null,
                "type": "Electricalwork",
                "description": "Denne posten dekker av og på bryter i bryterpanelet, trekking av kabel til speilbelysning. Speilbelysning vil si enten for speil i skap eller punkt i vegg over speilet for led lys. Speilet kan være innfelt eller utenpå. ",
                "subMaterials": [
                    {
                        "_id": "5ff9d432cacb5a0d8103317e",
                        "quantity": {
                            "type": null,
                            "svinn": 0,
                            "inTotal": null,
                            "quantityPerComponent": 1
                        },
                        "useListPrice": null,
                        "application": "Stikkontakt Dobbel Innfelt 1090 U PH IP44",
                        "unit": "stk",
                        "itemPrice": 183.2,
                        "inverseFactor": null,
                        "subject": "5fe754c7a781bf58838c3c8e",
                        "NS3420": null,
                        "time": {
                            "hoursPerComponent": 0.333,
                            "minPerComponent": 20,
                            "totalTimeConsumption": null
                        },
                        "documents": [],
                        "__v": 0,
                        "fdvDocument": "http://ec2-18-216-130-99.us-east-2.compute.amazonaws.com:3000/uploads/1608719977154Stikkontakt Dobbel Innfelt 1090 U PH IP44 Elko.pdf",
                        "masterMaterialId": "5fb2f53d18661b4ac16ae449",
                        "subjectDoc": {
                            "_id": "5fe754c7a781bf58838c3c8e",
                            "hourlyRate": 370,
                            "isDefault": false,
                            "id": 8,
                            "description": "Elektroarbeider",
                            "createdAt": "2020-12-26T15:20:39.389Z",
                            "updatedAt": "2021-02-10T12:17:54.985Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 192.35999999999999,
                        "varePrisWithCapChargesWithQuantity": 1923.6,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 2039,
                        "totalMinutePerSectionQuantity": 200,
                        "totalTimePrice": 2118.1626666666666,
                        "totalPrice": 4157.162666666667
                    },
                    {
                        "_id": "5ff9d432cacb5a0d8103317f",
                        "quantity": {
                            "type": null,
                            "svinn": null,
                            "inTotal": null,
                            "quantityPerComponent": null
                        },
                        "useListPrice": null,
                        "application": "Veggboks S57 4 løp Stenderfeste Elko",
                        "unit": null,
                        "itemPrice": 55.2,
                        "inverseFactor": null,
                        "subject": "5fe754c7a781bf58838c3c8e",
                        "NS3420": null,
                        "time": {
                            "hoursPerComponent": null,
                            "minPerComponent": 40,
                            "totalTimeConsumption": null
                        },
                        "documents": [],
                        "__v": 0,
                        "fdvDocument": "http://ec2-18-216-130-99.us-east-2.compute.amazonaws.com:3000/uploads/1608719931058veggboks s57 4 løp.pdf",
                        "masterMaterialId": "5fb2f5a718661b4ac16ae44d",
                        "subjectDoc": {
                            "_id": "5fe754c7a781bf58838c3c8e",
                            "hourlyRate": 370,
                            "isDefault": false,
                            "id": 8,
                            "description": "Elektroarbeider",
                            "createdAt": "2020-12-26T15:20:39.389Z",
                            "updatedAt": "2021-02-10T12:17:54.985Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 57.96,
                        "varePrisWithCapChargesWithQuantity": 579.6,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 614,
                        "totalMinutePerSectionQuantity": 400,
                        "totalTimePrice": 4236.325333333333,
                        "totalPrice": 4850.325333333333
                    },
                    {
                        "_id": "5ff9d432cacb5a0d81033180",
                        "quantity": {
                            "type": null,
                            "svinn": 0,
                            "inTotal": null,
                            "quantityPerComponent": 1
                        },
                        "useListPrice": null,
                        "application": "VEGGLOKK M/UTSP. STL-U",
                        "unit": "stk",
                        "itemPrice": 39.2,
                        "inverseFactor": null,
                        "subject": "5fe754c7a781bf58838c3c8e",
                        "NS3420": null,
                        "time": {
                            "hoursPerComponent": 0.167,
                            "minPerComponent": 10,
                            "totalTimeConsumption": null
                        },
                        "documents": [],
                        "__v": 0,
                        "fdvDocument": "http://ec2-18-216-130-99.us-east-2.compute.amazonaws.com:3000/uploads/1608675014564Vegglokk m:utsparring.pdf",
                        "masterMaterialId": "5fb2f57e18661b4ac16ae44b",
                        "subjectDoc": {
                            "_id": "5fe754c7a781bf58838c3c8e",
                            "hourlyRate": 370,
                            "isDefault": false,
                            "id": 8,
                            "description": "Elektroarbeider",
                            "createdAt": "2020-12-26T15:20:39.389Z",
                            "updatedAt": "2021-02-10T12:17:54.985Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 41.160000000000004,
                        "varePrisWithCapChargesWithQuantity": 411.6,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 436,
                        "totalMinutePerSectionQuantity": 100,
                        "totalTimePrice": 1059.0813333333333,
                        "totalPrice": 1495.0813333333333
                    },
                    {
                        "_id": "5ff9d432cacb5a0d81033181",
                        "quantity": {
                            "type": null,
                            "svinn": 0,
                            "inTotal": null,
                            "quantityPerComponent": 1
                        },
                        "useListPrice": null,
                        "application": "Veggboks S57 4 løp Stenderfeste Elk",
                        "unit": null,
                        "itemPrice": 55.2,
                        "inverseFactor": null,
                        "subject": "5fe754c7a781bf58838c3c8e",
                        "NS3420": null,
                        "time": {
                            "hoursPerComponent": 0.333,
                            "minPerComponent": 20,
                            "totalTimeConsumption": null
                        },
                        "documents": [],
                        "__v": 0,
                        "fdvDocument": "http://ec2-18-216-130-99.us-east-2.compute.amazonaws.com:3000/uploads/1608670852581Veggboks 55-72:100F 6 løp Stenderfeste Schneider.pdf",
                        "masterMaterialId": "5fb2f47818661b4ac16ae43c",
                        "subjectDoc": {
                            "_id": "5fe754c7a781bf58838c3c8e",
                            "hourlyRate": 370,
                            "isDefault": false,
                            "id": 8,
                            "description": "Elektroarbeider",
                            "createdAt": "2020-12-26T15:20:39.389Z",
                            "updatedAt": "2021-02-10T12:17:54.985Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 57.96,
                        "varePrisWithCapChargesWithQuantity": 579.6,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 614,
                        "totalMinutePerSectionQuantity": 200,
                        "totalTimePrice": 2118.1626666666666,
                        "totalPrice": 2732.1626666666666
                    },
                    {
                        "_id": "5ff9d432cacb5a0d81033182",
                        "quantity": {
                            "type": null,
                            "svinn": 0,
                            "inTotal": null,
                            "quantityPerComponent": 1
                        },
                        "useListPrice": null,
                        "application": "Bryter innfelt 2pol RS16/2 PH Elko",
                        "unit": "stk",
                        "itemPrice": 79.2,
                        "inverseFactor": null,
                        "subject": "5fe754c7a781bf58838c3c8e",
                        "NS3420": null,
                        "time": {
                            "hoursPerComponent": 0.25,
                            "minPerComponent": 15,
                            "totalTimeConsumption": null
                        },
                        "documents": [],
                        "__v": 0,
                        "fdvDocument": "http://ec2-18-216-130-99.us-east-2.compute.amazonaws.com:3000/uploads/1608670502297Bryter innfelt 2pol RS16:2 PH Elko.pdf",
                        "masterMaterialId": "5fb2f4db18661b4ac16ae443",
                        "subjectDoc": {
                            "_id": "5fe754c7a781bf58838c3c8e",
                            "hourlyRate": 370,
                            "isDefault": false,
                            "id": 8,
                            "description": "Elektroarbeider",
                            "createdAt": "2020-12-26T15:20:39.389Z",
                            "updatedAt": "2021-02-10T12:17:54.985Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 83.16,
                        "varePrisWithCapChargesWithQuantity": 831.5999999999999,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 881,
                        "totalMinutePerSectionQuantity": 150,
                        "totalTimePrice": 1588.622,
                        "totalPrice": 2469.6220000000003
                    }
                ],
                "index": 8,
                "subOfVarePris": 411.99999999999994,
                "varePrisWithCapCharges": 432.5999999999999,
                "varePrisWithCapChargesWithQuantity": 4325.999999999999,
                "varePrisWithCapChargesWithQuantityAndPaslag": 4586,
                "totalCostPerHour": 599.48,
                "totalCostPerMinute": 9.991333333333333,
                "totalCostPerHourWithCapCharges": 635.4488,
                "totalCostPerMinuteWithCapCharges": 10.590813333333333,
                "totalMinutePerSection": 105,
                "totalMinutePerSectionQuantity": 1050,
                "totalTimePrice": 11120.35,
                "totalPrice": 15706.35
            },
            {
                "_id": "5fb2f6cd18661b4ac16ae45d",
                "quantity": 10,
                "unit": null,
                "buildingComponents": "Spotter pr. punkt",
                "code": null,
                "level": null,
                "type": "Electricalwork",
                "description": "I planleggingsfasen vil det bestemmes hvor mange spotter det skal etableres i tak, da vil det i planleggingen legges opp justerbare innfellingsbokser for downlights, samt trekkes kabler for downlights. ",
                "subMaterials": [
                    {
                        "_id": "5ff9d460cacb5a0d81033183",
                        "quantity": {
                            "type": null,
                            "svinn": 0,
                            "inTotal": null,
                            "quantityPerComponent": 1
                        },
                        "useListPrice": null,
                        "application": "Junistar Gyro matt-hvit 8W LED 2700K                                  ",
                        "unit": "stk",
                        "itemPrice": 639.2,
                        "inverseFactor": null,
                        "subject": "5fe754c7a781bf58838c3c8e",
                        "NS3420": null,
                        "time": {
                            "hoursPerComponent": 0.333,
                            "minPerComponent": 20,
                            "totalTimeConsumption": null
                        },
                        "documents": [],
                        "__v": 0,
                        "fdvDocument": "http://ec2-18-216-130-99.us-east-2.compute.amazonaws.com:3000/uploads/1608673781004Alfa Soft Downlight 10W matt hvit.pdf",
                        "masterMaterialId": "5fb2f63b18661b4ac16ae455",
                        "subjectDoc": {
                            "_id": "5fe754c7a781bf58838c3c8e",
                            "hourlyRate": 370,
                            "isDefault": false,
                            "id": 8,
                            "description": "Elektroarbeider",
                            "createdAt": "2020-12-26T15:20:39.389Z",
                            "updatedAt": "2021-02-10T12:17:54.985Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 671.1600000000001,
                        "varePrisWithCapChargesWithQuantity": 6711.6,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 7114,
                        "totalMinutePerSectionQuantity": 200,
                        "totalTimePrice": 2118.1626666666666,
                        "totalPrice": 9232.162666666667
                    },
                    {
                        "_id": "5ff9d460cacb5a0d81033184",
                        "quantity": {
                            "type": null,
                            "svinn": 0,
                            "inTotal": null,
                            "quantityPerComponent": 1
                        },
                        "useListPrice": null,
                        "application": "Uniboks innfellingsboks justerbar for downlight                            ",
                        "unit": "stk",
                        "itemPrice": 79.2,
                        "inverseFactor": null,
                        "subject": "5fe754c7a781bf58838c3c8e",
                        "NS3420": null,
                        "time": {
                            "hoursPerComponent": 0.333,
                            "minPerComponent": 20,
                            "totalTimeConsumption": null
                        },
                        "documents": [],
                        "__v": 0,
                        "fdvDocument": "http://ec2-18-216-130-99.us-east-2.compute.amazonaws.com:3000/uploads/1608675149379Downlightboks lav.pdf",
                        "masterMaterialId": "5fb2f67218661b4ac16ae457",
                        "subjectDoc": {
                            "_id": "5fe754c7a781bf58838c3c8e",
                            "hourlyRate": 370,
                            "isDefault": false,
                            "id": 8,
                            "description": "Elektroarbeider",
                            "createdAt": "2020-12-26T15:20:39.389Z",
                            "updatedAt": "2021-02-10T12:17:54.985Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 83.16,
                        "varePrisWithCapChargesWithQuantity": 831.5999999999999,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 881,
                        "totalMinutePerSectionQuantity": 200,
                        "totalTimePrice": 2118.1626666666666,
                        "totalPrice": 2999.1626666666666
                    },
                    {
                        "_id": "5ff9d460cacb5a0d81033185",
                        "quantity": {
                            "type": null,
                            "svinn": 0,
                            "inTotal": null,
                            "quantityPerComponent": 1
                        },
                        "useListPrice": null,
                        "application": "Downlightkabel RXKX 90 2x1,5                                 ",
                        "unit": "stk",
                        "itemPrice": 25.21,
                        "inverseFactor": null,
                        "subject": "5fe754c7a781bf58838c3c8e",
                        "NS3420": null,
                        "time": {
                            "hoursPerComponent": 0,
                            "minPerComponent": 0,
                            "totalTimeConsumption": null
                        },
                        "documents": [],
                        "__v": 0,
                        "fdvDocument": "http://ec2-18-216-130-99.us-east-2.compute.amazonaws.com:3000/uploads/1608675477211Downlightkabel RXKX 90 2x1,5.pdf",
                        "masterMaterialId": "5fb2f69c18661b4ac16ae459",
                        "subjectDoc": {
                            "_id": "5fe754c7a781bf58838c3c8e",
                            "hourlyRate": 370,
                            "isDefault": false,
                            "id": 8,
                            "description": "Elektroarbeider",
                            "createdAt": "2020-12-26T15:20:39.389Z",
                            "updatedAt": "2021-02-10T12:17:54.985Z",
                            "__v": 0
                        },
                        "varePrisWithCapCharges": 26.4705,
                        "varePrisWithCapChargesWithQuantity": 264.70500000000004,
                        "varePrisWithCapChargesWithQuantityAndPaslag": 281,
                        "totalMinutePerSectionQuantity": 0,
                        "totalTimePrice": 0,
                        "totalPrice": 281
                    }
                ],
                "index": 8,
                "subOfVarePris": 743.6100000000001,
                "varePrisWithCapCharges": 780.7905000000002,
                "varePrisWithCapChargesWithQuantity": 7807.905000000002,
                "varePrisWithCapChargesWithQuantityAndPaslag": 8276,
                "totalCostPerHour": 599.48,
                "totalCostPerMinute": 9.991333333333333,
                "totalCostPerHourWithCapCharges": 635.4488,
                "totalCostPerMinuteWithCapCharges": 10.590813333333333,
                "totalMinutePerSection": 40,
                "totalMinutePerSectionQuantity": 400,
                "totalTimePrice": 4236.33,
                "totalPrice": 12512.33
            }
        ]
    }
;

document.getElementById('short').onclick = () => {
    printPDF(Object.assign(basePrintData, shortPrintData));
};

document.getElementById('long').onclick = () => {
    printPDF(Object.assign(basePrintData, longPrintData));
};

document.getElementById('longest').onclick = () => {
    printPDF(Object.assign(basePrintData, longestPrintData));
};

document.getElementById('make_offer').onclick = () => {
    printPDF1(Object.assign(mydata, basePrintData1));
};

