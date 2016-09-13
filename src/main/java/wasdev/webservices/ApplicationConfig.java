package wasdev.webservices;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
 
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
 
@ApplicationPath("/rest")
public class ApplicationConfig extends Application {
 
	@Override
    public Set<Class<?>> getClasses() 
    {
        Set<Class<?>> resources = new HashSet<Class<?>>();
        //
        //register REST modules
        resources.add(AuthResource.class);
        /////////
        //Manually adding MOXyJSONFeature
//        resources.add(org.glassfish.jersey.moxy.json.MoxyJsonFeature.class);
 
        //Configure Moxy behavior
//        resources.add(JsonMoxyConfigurationContextResolver.class);
 
        return resources;
    }
}