package hu.schdesign.solarboat;

import hu.schdesign.solarboat.dao.UserRepository;
import hu.schdesign.solarboat.service.NewsService;
import io.reactivex.Observable;
import io.reactivex.internal.operators.observable.ObservableAny;
import io.reactivex.schedulers.Schedulers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.concurrent.TimeUnit;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = UserRepository.class)
public class SolarboatApplication implements CommandLineRunner {


	private static Logger LOG = LoggerFactory
			.getLogger(SolarboatApplication.class);
	@Autowired
	private static  NewsService newsSerervice;



	public static void main(String[] args) {
		SpringApplication.run(SolarboatApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {



	}

}
