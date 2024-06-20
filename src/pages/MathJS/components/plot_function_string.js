import * as d3 from "npm:d3";
import {compile, parse} from 'npm:mathjs';
import * as Plot from "npm:@observablehq/plot";
import {build_samples} from '../../../common_components/build_samples.js';


export function plot_function_string(s) {
  let compiled, parsed;
  try {
   compiled = compile(s);
   parsed = parse(s);
   try {
     let pts = build_samples(x => compiled.evaluate({x:x}), -3, 3, {N:100});
     return {
       plot: Plot.plot({
           marks: [
             Plot.line(pts),
             Plot.axisX({y:0}),
             Plot.ruleY([0]),
             Plot.axisY({x:0}),
             Plot.ruleX([0])
           ]
         }),
        parsed: parsed
      }
   }
   catch {
     return "computation error"
   }
  }
  catch {
    return 'parse error'
    // 'pass'
  }
}
