import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, UtensilsCrossed, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const location = useLocation();
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <UtensilsCrossed className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl text-foreground">FreshBite</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/shop") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Menu
          </Link>
          <Link
            to="/history"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/history") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Order History
          </Link>
        </nav>

        <div className="flex items-center  gap-2">
          <Link to="/history" className="md:hidden">
            <Button variant="ghost" size="icon">
              <History className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </Link>
          &nbsp;
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
