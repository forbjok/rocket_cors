var N = null;var searchIndex = {};
searchIndex["rocket_cors"]={"doc":"Build Status Dependency Status Repository Crates.io","items":[[3,"Method","rocket_cors","A wrapper type around `rocket::http::Method` to support serialization and deserialization",N,N],[3,"Cors","","Response generator and Fairing for CORS",N,N],[12,"allowed_origins","","Origins that are allowed to make requests. Will be verified against the `Origin` request header.",0,N],[12,"allowed_methods","","The list of methods which the allowed origins are allowed to access for non-simple requests.",0,N],[12,"allowed_headers","","The list of header field names which can be used when this resource is accessed by allowed origins.",0,N],[12,"allow_credentials","","Allows users to make authenticated requests. If true, injects the `Access-Control-Allow-Credentials` header in responses. This allows cookies and credentials to be submitted across domains.",0,N],[12,"expose_headers","","The list of headers which are safe to expose to the API of a CORS API specification. This corresponds to the `Access-Control-Expose-Headers` responde header.",0,N],[12,"max_age","","The maximum time for which this CORS request maybe cached. This value is set as the `Access-Control-Max-Age` header.",0,N],[12,"send_wildcard","","If true, and the `allowed_origins` parameter is `All`, a wildcard `Access-Control-Allow-Origin` response header is sent, rather than the request’s `Origin` header.",0,N],[12,"fairing_route_base","","When used as Fairing, Cors will need to redirect failed CORS checks to a custom route mounted by the fairing. Specify the base of the route so that it doesn't clash with any of your existing routes.",0,N],[12,"fairing_route_rank","","When used as Fairing, Cors will need to redirect failed CORS checks to a custom route mounted by the fairing. Specify the rank of the route so that it doesn't clash with any of your existing routes. Remember that a higher ranked route has lower priority.",0,N],[3,"Guard","","A request guard to check CORS headers before a route is run. Will not execute the route if checks fail.",N,N],[3,"Responder","","A `Responder` which will simply wraps another `Responder` with CORS headers.",N,N],[3,"ManualResponder","","A Manual Responder used in the \"truly manual\" mode of operation.",N,N],[4,"Error","","Errors during operations",N,N],[13,"MissingOrigin","","The HTTP request header `Origin` is required but was not provided",1,N],[13,"BadOrigin","","The HTTP request header `Origin` could not be parsed correctly.",1,N],[13,"MissingRequestMethod","","The request header `Access-Control-Request-Method` is required but is missing",1,N],[13,"BadRequestMethod","","The request header `Access-Control-Request-Method` has an invalid value",1,N],[13,"MissingRequestHeaders","","The request header `Access-Control-Request-Headers`  is required but is missing.",1,N],[13,"OriginNotAllowed","","Origin is not allowed to make this request",1,N],[13,"MethodNotAllowed","","Requested method is not allowed",1,N],[13,"HeadersNotAllowed","","One or more headers requested are not allowed",1,N],[13,"CredentialsWithWildcardOrigin","","Credentials are allowed, but the Origin is set to \"*\". This is not allowed by W3C",1,N],[13,"MissingCorsInRocketState","","A CORS Request Guard was used, but no CORS Options was available in Rocket's state",1,N],[13,"MissingInjectedHeader","","The `on_response` handler of Fairing could not find the injected header from the Request. Either some other fairing has removed it, or this is a bug.",1,N],[13,"UnknownInjectedHeader","","The `on_response` handler of Fairing found an unknown injected header value from the Request. Either some other fairing has modified it, or this is a bug.",1,N],[4,"AllOrSome","","An enum signifying that some of type T is allowed, or `All` (everything is allowed).",N,N],[13,"All","","Everything is allowed. Usually equivalent to the \"*\" value.",2,N],[13,"Some","","Only some of `T` is allowed",2,N],[5,"catch_all_options_routes","","Returns \"catch all\" OPTIONS routes that you can mount to catch all OPTIONS request. Only works if you have put a `Cors` struct into Rocket's managed state.",N,[[],["vec",["route"]]]],[11,"info","","",0,[[["self"]],["info"]]],[11,"on_attach","","",0,[[["self"],["rocket"]],["result",["rocket","rocket"]]]],[11,"on_request","","",0,[[["self"],["request"],["data"]]]],[11,"on_response","","",0,[[["self"],["request"],["response"]]]],[0,"headers","","CORS specific Request Headers",N,N],[3,"HeaderFieldName","rocket_cors::headers","A case insensitive header name",N,N],[3,"Url","","A wrapped `url::Url` to allow for deserialization",N,N],[3,"AccessControlRequestMethod","","The `Access-Control-Request-Method` request header",N,N],[12,"0","","",3,N],[3,"AccessControlRequestHeaders","","The `Access-Control-Request-Headers` request header",N,N],[12,"0","","",4,N],[6,"HeaderFieldNamesSet","","A set of case insensitive header names",N,N],[6,"Origin","","The `Origin` request header used in CORS",N,N],[11,"eq","","",5,[[["self"],["headerfieldname"]],["bool"]]],[11,"ne","","",5,[[["self"],["headerfieldname"]],["bool"]]],[11,"clone","","",5,[[["self"]],["headerfieldname"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"hash","","",5,N],[11,"deref","","",5,N],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"from","","",5,[[["str"]],["self"]]],[11,"from","","",5,[[["string"]],["self"]]],[11,"from_str","","",5,[[["str"]],["result"]]],[11,"eq","","",6,[[["self"],["url"]],["bool"]]],[11,"ne","","",6,[[["self"],["url"]],["bool"]]],[11,"clone","","",6,[[["self"]],["url"]]],[11,"hash","","",6,N],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"deref","","",6,N],[11,"from_str","","",6,[[["str"]],["result"]]],[11,"from_request","","",6,[[["request"]],["outcome",["error"]]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"from_str","","",3,[[["str"]],["result"]]],[11,"from_request","","",3,[[["request"]],["outcome",["error"]]]],[11,"eq","","",4,[[["self"],["accesscontrolrequestheaders"]],["bool"]]],[11,"ne","","",4,[[["self"],["accesscontrolrequestheaders"]],["bool"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"from_str","","Will never fail",4,[[["str"]],["result"]]],[11,"from_request","","",4,[[["request"]],["outcome",["error"]]]],[11,"serialize","rocket_cors","",7,[[["self"],["s"]],["result"]]],[11,"deserialize","","",7,[[["d"]],["result",["method"]]]],[6,"AllowedOrigins","","A list of allowed origins. Either Some origins are allowed, or all origins are allowed.",N,N],[6,"AllowedMethods","","A list of allowed methods",N,N],[6,"AllowedHeaders","","A list of allowed headers",N,N],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"description","","",1,[[["self"]],["str"]]],[11,"cause","","",1,[[["self"]],["option",["error"]]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"respond_to","","",1,[[["self"],["request"]],["result",["response","status"]]]],[11,"clone","","",2,[[["self"]],["allorsome"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"eq","","",2,[[["self"],["allorsome"]],["bool"]]],[11,"ne","","",2,[[["self"],["allorsome"]],["bool"]]],[11,"default","","",2,[[],["self"]]],[11,"is_all","","Returns whether this is an `All` variant",2,[[["self"]],["bool"]]],[11,"is_some","","Returns whether this is a `Some` variant",2,[[["self"]],["bool"]]],[11,"new_from_str_list","","New `AllOrSome` from a list of URL strings. Returns a tuple where the first element is the struct `AllOrSome`, and the second element is a map of strings which failed to parse into URLs and their associated parse errors.",2,N],[11,"clone","","",7,[[["self"]],["method"]]],[11,"eq","","",7,[[["self"],["method"]],["bool"]]],[11,"ne","","",7,[[["self"],["method"]],["bool"]]],[11,"hash","","",7,N],[11,"fmt","","",7,[[["self"],["formatter"]],["result"]]],[11,"from_str","","",7,[[["str"]],["result"]]],[11,"deref","","",7,N],[11,"from","","",7,[[["method"]],["self"]]],[11,"fmt","","",7,[[["self"],["formatter"]],["result"]]],[11,"some","","Allows some origins",8,N],[11,"all","","Allows all origins",8,[[],["self"]]],[11,"some","","Allow some headers",9,N],[11,"all","","Allows all headers",9,[[],["self"]]],[11,"eq","","",0,[[["self"],["cors"]],["bool"]]],[11,"ne","","",0,[[["self"],["cors"]],["bool"]]],[11,"clone","","",0,[[["self"]],["cors"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"default","","",0,[[],["self"]]],[11,"validate","","Validates if any of the settings are disallowed or incorrect",0,[[["self"]],["result",["error"]]]],[11,"respond_owned","","Manually respond to a request with CORS checks and headers using an Owned `Cors`.",0,[[["self"],["f"]],["result",["manualresponder","error"]]]],[11,"respond_borrowed","","Manually respond to a request with CORS checks and headers using a borrowed `Cors`.",0,[[["self"],["f"]],["result",["manualresponder","error"]]]],[11,"responder","","Consumes the Guard and return  a `Responder` that wraps a provided `rocket:response::Responder` with CORS headers",10,[[["self"],["r"]],["responder"]]],[11,"response","","Merge a `rocket::Response` with this CORS Guard. This is usually used in the final step of a route to return a value for the route.",10,[[["self"],["response"]],["response"]]],[11,"from_request","","",10,[[["request"]],["outcome"]]],[11,"fmt","","",11,[[["self"],["formatter"]],["result"]]],[11,"respond_to","","",11,[[["self"],["request"]],["result"]]],[11,"respond_to","","",12,[[["self"],["request"]],["result"]]]],"paths":[[3,"Cors"],[4,"Error"],[4,"AllOrSome"],[3,"AccessControlRequestMethod"],[3,"AccessControlRequestHeaders"],[3,"HeaderFieldName"],[3,"Url"],[3,"Method"],[6,"AllowedOrigins"],[6,"AllowedHeaders"],[3,"Guard"],[3,"Responder"],[3,"ManualResponder"]]};
initSearch(searchIndex);
