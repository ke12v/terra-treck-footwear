import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function Sidebar() {
  return (
    <div className="w-full space-y-8 pr-6">
      <div>
        <h3 className="font-heading text-lg font-semibold mb-4 text-forest-900">Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="trail-run" />
            <Label htmlFor="trail-run" className="font-normal cursor-pointer">Trail Run</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="city-walk" />
            <Label htmlFor="city-walk" className="font-normal cursor-pointer">City Walk</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="mud-trail" defaultChecked />
            <Label htmlFor="mud-trail" className="font-normal cursor-pointer">Mud Trail</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="hiking" />
            <Label htmlFor="hiking" className="font-normal cursor-pointer">Hiking</Label>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-heading text-lg font-semibold mb-4 text-forest-900">Size (US)</h3>
        <div className="grid grid-cols-3 gap-2">
          {[7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11].map((size) => (
            <div 
              key={size}
              className="flex items-center justify-center border border-border rounded-md py-2 text-sm hover:border-primary hover:text-primary cursor-pointer transition-colors"
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-heading text-lg font-semibold mb-4 text-forest-900">Color</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-[#5D4037]" />
            <Label className="font-normal">Dark Walnut</Label>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-[#8D6E63]" />
            <Label className="font-normal">Saddle Brown</Label>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-[#263238]" />
            <Label className="font-normal">Charcoal</Label>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-[#A1887F]" />
            <Label className="font-normal">Sand</Label>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <div>
        <h3 className="font-heading text-lg font-semibold mb-4 text-forest-900">Price Range</h3>
        <Slider defaultValue={[2000]} max={5000} step={100} className="mt-6" />
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <span>$0</span>
          <span>$5,000+</span>
        </div>
      </div>
    </div>
  );
}
