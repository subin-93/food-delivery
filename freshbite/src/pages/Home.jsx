import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import FoodCard from "@/components/FoodCard";
import { foodItems } from "@/data/foodItems";
import heroImage from "@/assets/hero-food.jpg";

const Home = () => {
  const featuredItems = foodItems.slice(0, 3);

  return (
    <div className="min-h-screen bg-background  ">
      {/* Hero Section */}
      <section className="relative h-[600px]  flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Fresh Food
              <span className="block text-primary">Delivered Fast</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Delicious meals from your favorite restaurants, delivered right to
              your door in minutes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button variant="hero" size="lg">
                  Order Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/history">
                <Button variant="outline" size="lg">
                  View Orders
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Fresh Ingredients
              </h3>
              <p className="text-muted-foreground">
                We source only the freshest, highest-quality ingredients for
                every dish
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Fast Delivery
              </h3>
              <p className="text-muted-foreground">
                Get your meals delivered hot and fresh in 30 minutes or less
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Top Rated
              </h3>
              <p className="text-muted-foreground">
                Highly rated by thousands of satisfied customers across the city
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Dishes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out our most popular items, loved by our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/shop">
              <Button size="lg">
                View Full Menu
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
